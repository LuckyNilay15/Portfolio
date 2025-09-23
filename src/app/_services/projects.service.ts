import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Recollect',
      summary: 'Full-stack reading & AI summarisation app with auth, notes, and responsive UI.',
      description: 'React/Next.js app with Node/Express & MongoDB. Integrates Groq API to summarise text via chat, with secure short-notes management (save/view/delete). Deployed on Render/Netlify.',
      projectLink: 'https://recollect15.netlify.app/',
      pictures: [
        'https://lh5.googleusercontent.com/p/AF1QipPSVcgXiZA16yXg-UkeA8ueOIVGP95cuO4VcDaQ=w1024-h960-p-k-no',
      ],
      tags: [Tag.REACT, Tag.TYPESCRIPT, Tag.LLM]
    },
    {
     id: 1,
      name: 'Plant Disease Detection',
      summary: 'CNN classifier for 38 plant diseases using TensorFlow/Keras.',
      description: 'Trained and tuned a CNN (batch size/epochs/hyperparams) for multi-class image classification. Used Kaggle for dataset handling/training. Code in Python.',
      projectLink: 'https://github.com/LuckyNilay15/Plant_Disease_Classification_CNN',
      pictures: [
        'https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41598-023-34549-2/MediaObjects/41598_2023_34549_Fig1_HTML.png'
      ],
      tags: [Tag.PYTHON]
    },
    {
     id: 2,
      name: 'CRM Mini App',
      summary: 'Mini CRM with Google Auth, REST APIs, audience/campaign features, and comms log.',
      description: 'React frontend with Node/Express and MongoDB backend. Postman-tested REST APIs to manage customers/orders. Deployed on Netlify/Render.',
      projectLink: 'https://crm-app2.netlify.app/',
      pictures: [
        'https://fekrait.com/uploads/topics/16716493448662.jpg' 
      ],
      tags: [Tag.REACT, Tag.TYPESCRIPT]
    },
    {
      id: 3,
      name: 'Portfolio Website',
      summary: 'Personal portfolio built with Angular & TypeScript.',
      description: 'Filterable projects, responsive layout, and clean routing. Showcases projects and skills.',
      projectLink: '', // or your live link
      pictures: ['https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio.jpg'],
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT]
    },
  ];
  constructor() { }

  getProjects(){
    return this.projects; /* return the projects array */
  }

  getProjectById(id: number){
    let project = this.projects.find(project => project.id === id); /* find the project with the given id */
    if (project == undefined){
      throw new TypeError("Project not found"); /* throw an error if the project is not found */
    }

    return project; /* return the project */
  }

  getProjectsByFilter(filterTags: Tag[]): Project[] {
    let filteredProjects: Project[] = [];
    this.projects.forEach(function (project) {
        let foundAll = true;

        filterTags.forEach(function (tag) {
            if (!project.tags.includes(tag)) {
                foundAll = false;
            }
        });

        if (foundAll) {
            filteredProjects.push(project);
        }
    });
    return filteredProjects;
}
}