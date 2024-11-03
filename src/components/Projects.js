import React from 'react';
import './Projects.css';
import wheat from './wheat.jpeg';
import w_flour from './wheatflour.jpeg'
import maida from './maida.jpeg'
import semolina from './semolina.jpeg'
import crushed_wheat from './crushed_wheat.jpeg'
import pulses from './pulses.jpg'
import rice from './rice.jpeg'
import sugar from './sugar.jpeg'
import poha from './poha.jpg'
import besan from './gram_flour.jpeg'
import soya from './soyabean_oil.avif'
import cotton_seeds from './cotton_seeds.jpg'
import sunflower from './sunflower_oil.jpg'
import groundnut from './groundnut_oil.avif'
import palm from './palm_oil.avif'


const Projects = () => {
  const projects = [
    {
      title: 'Wheat',
      description: 'High-grade wheat selected for its purity and quality, suitable for a wide range of applications including flour milling, food production, and animal feed. We ensures a steady supply of premium wheat, meeting the standards of customers.',
      image: wheat, // Image URL
    },
    {
      title: 'Wheat Flour',
      description: 'Finely milled wheat flour crafted to deliver excellent texture and flavor, perfect for baking, cooking, and industrial food production. SGB Industries provides high-quality wheat flour that meets rigorous standards, ensuring consistency and satisfaction for our customers.',
      image: w_flour,
    },
    {
      title: 'Maida',
      description: 'Premium-quality refined wheat flour (Maida), known for its smooth texture and versatility, ideal for baking, confectionery, and a variety of culinary applications. SGB Industries delivers consistently fine Maida, trusted by customers for its quality and purity.',
      image: maida,
    },
    {
      title: 'Semolina',
      description: 'High-quality semolina with a rich, golden color and coarse texture, perfect for pasta, bread, and traditional dishes. SGB Industries ensures a pure and consistent supply, trusted by food manufacturers and culinary professionals alike.',
      image: semolina,
    },
    {
      title: 'Crushed Wheat',
      description: 'Nutritious and high-fiber crushed wheat, ideal for healthy meals, cereals, and baking applications. SGB Industries provides top-grade crushed wheat, valued for its wholesome quality and consistency in texture, meeting the needs of health-conscious consumers and food manufacturers.',
      image: crushed_wheat, // Image URL
    },
    {
      title: 'All type of Pulses',
      description: 'A diverse range of high-quality pulses, packed with protein and essential nutrients, ideal for healthy meals and snacks. SGB Industries supplies various pulses, including lentils, chickpeas, and beans, renowned for their superior quality and consistent flavor, catering to health-conscious consumers and food manufacturers alike.',
      image: pulses,
    },
    {
      title: 'Rice',
      description: 'Finest quality rice, carefully sourced and processed for exceptional taste and texture. SGB Industries provides a variety of rice types, including basmati and non-basmati, known for their superior quality and nutritional benefits, making them a staple for health-conscious consumers and culinary enthusiasts.',
      image: rice,
    },
    {
      title: 'Sugar',
      description: 'Premium-quality sugar, refined for purity and sweetness, perfect for culinary applications and food manufacturing. SGB Industries supplies various types of sugar, including granulated, powdered, and brown sugar, valued for their consistent quality and versatility in both home and commercial kitchens.',
      image: sugar,
    },
    {
      title: 'Poha',
      description: 'Nutritious and versatile poha, made from high-quality flattened rice, ideal for quick meals and healthy snacks. SGB Industries provides premium poha, recognized for its light texture and rich flavor, catering to health-conscious consumers and food manufacturers seeking convenient and wholesome options.',
      image: poha,
    },
    {
      title: 'Gram flour(Besan)',
      description: 'High-quality gram flour, ground from premium chickpeas, perfect for a variety of dishes, including batters, snacks, and traditional recipes. SGB Industries supplies fine-textured gram flour, known for its rich flavor and nutritional benefits, making it a preferred choice for health-conscious consumers and culinary professionals.',
      image: besan,
    },
    {
      title: 'Edible oil of Soya',
      description: 'Premium-quality edible soy oil, known for its light flavor and healthy fat content, ideal for cooking, frying, and salad dressings. SGB Industries provides refined soy oil that meets high standards of purity and quality, making it a versatile choice for health-conscious consumers and food manufacturers.',
      image: soya,
    },
    {
      title: 'Cotton Seed Oil',
      description: 'Premium-quality cottonseed oil, known for its light flavor and high smoke point, making it ideal for frying, baking, and salad dressings. SGB Industries provides refined cottonseed oil that meets stringent quality standards, appealing to health-conscious consumers and food manufacturers seeking versatile cooking oils.',
      image: cotton_seeds,
    },
    {
      title: 'Sunflower Oil',
      description: 'Premium-quality sunflower oil, celebrated for its mild flavor and high smoke point, making it perfect for frying, sautéing, and creating light salad dressings. SGB Industries offers refined sunflower oil that adheres to rigorous quality standards, catering to health-conscious individuals and food manufacturers in search of a versatile and heart-healthy cooking oil.',
      image: sunflower,
    },
    {
      title: 'Groundnut Oil',
      description: 'Premium-quality groundnut oil, prized for its rich, nutty flavor and high smoke point, is ideal for frying, sautéing, and marinades. SGB Industries provides refined groundnut oil that meets rigorous quality standards, catering to health-conscious consumers and food producers seeking a flavorful, versatile cooking oil.',
      image: groundnut,
    },
    {
      title: 'Palm Oil',
      description: 'Premium-quality palm oil, known for its mild taste and exceptional heat stability, is ideal for frying, baking, and various processed foods. SGB Industries offers refined palm oil that meets strict quality standards, making it a preferred choice for health-conscious consumers and manufacturers seeking a versatile and long-lasting cooking oil.',
      image: palm,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className='projectheading'>Our Products</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
