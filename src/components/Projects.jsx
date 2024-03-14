
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
import moodifyImg from '../assets/moodify.png';

ChartJS.register(ArcElement, Tooltip, Legend);

const languageColors = {
  HTML: 'red',
  CSS: 'blue',
  JavaScript: 'yellow'
};

const projects = [
  {
    id: 1,
    title: 'Outdoor Adventures',
    description: 'An app designed to help find national parks based on location and activity',
    imageUrl: outdoorAdventuresImage,
    liveUrl: 'https://evanrc.github.io/Outdoor-Adventures/',
    repoUrl: 'https://github.com/chensley8/Outdoor-Adventures'
  },
  {
    id: 2,
    title: 'Moodify',
    description: 'An app designed to use AI to generate playlists using the Spotify API',
    imageUrl: moodifyImg,
    liveUrl: 'https://moodify-s7yr.onrender.com/',
    repoUrl: 'https://github.com/chensley8/Moodify'
  }
  // ... other projects
];

function LanguagesChart({ languages }) {
  const totalBytes = Object.values(languages).reduce((total, current) => total + current, 0);

  const languagePercentages = Object.keys(languages).map((language) => ({
    label: language,
    data: ((languages[language] / totalBytes) * 100).toFixed(2),
    backgroundColor: languageColors[language] || 'gray',
  }));

  const chartData = {
    labels: languagePercentages.map((language) => language.label),
    datasets: [
      {
        label: 'Programming Languages',
        data: languagePercentages.map((language) => language.data),
        backgroundColor: languagePercentages.map((language) => language.backgroundColor),
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
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project) => (
          <Col key={project.id}>
            <Card border="dark" style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}> 
              <Card.Img variant="top" src={project.imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body style={{ flex: 1 }}>
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