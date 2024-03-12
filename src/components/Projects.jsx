
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import outdoorAdventuresImage from '../assets/outdooradventures.png';

ChartJS.register(ArcElement, Tooltip, Legend);

const projects = [
  {
    id: 1,
    title: 'Outdoor Adventures',
    description: 'An app designed to help find national parks based on location and activity',
    imageUrl: outdoorAdventuresImage,
    liveUrl: 'https://evanrc.github.io/Outdoor-Adventures/',
    repoUrl: 'https://github.com/chensley8/Outdoor-Adventures'
  },

  // ... other projects
];

function LanguagesChart({ languages }) {
  const totalBytes = Object.values(languages).reduce((total, current) => total + current, 0);

  const languagePercentages = Object.values(languages).map((bytes) => ((bytes / totalBytes) * 100).toFixed(2));

  const backgroundColors = Object.keys(languages).map(() => {
    // This function generates a random color.
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  });
  const chartData = {
    labels: Object.keys(languages),
    datasets: [
      {
        label: 'Programming Languages',
        data: languagePercentages,
        backgroundColor: backgroundColors,
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed + '%';
            }
            return label;
          }
        }
      },
    },
  };

  return <Pie data={chartData} options={chartOptions} />;
}


function Projects() {
  const [languagesData, setLanguagesData] = useState({});

  useEffect(() => {
    projects.forEach((project) => {
      const [owner, repo] = project.repoUrl.replace('https://github.com/', '').split('/');
      const fetchLanguages = async () => {
        try {
          const { data } = await axios.get(`https://api.github.com/repos/${owner}/${repo}/languages`);
          setLanguagesData((prevData) => ({
            ...prevData,
            [project.id]: data,
          }));
        } catch (error) {
          console.error('Error fetching languages: ', error);
        }
      };

      fetchLanguages();
    });
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4"> {/* Adjust the number of columns based on the screen size */}
        {projects.map((project) => (
          <Col key={project.id}>
            <Card border="warning">
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                {languagesData[project.id] && (
                  <LanguagesChart languages={languagesData[project.id]} />
                )}
                <Button variant="primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Site</Button>
                <Button variant="secondary" href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="ml-2">GitHub Repo</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;