// portfolio.js

const projects = [
    {
      title: "Photo-Edit",
      subtitle: "Web application to create photo albums automatically.",
      description:
        "Developed using PHP with Laravel as a framework and JavaScript, it is responsible for automatically developing a photo album with relevant information on properties previously configured according to the agency. In addition, it gives the opportunity to manually modify one or more of the images of a selected property.",
      technologies: ["Laravel 11", "JavaScript", "FabricJs", "AWS", "Dropbox"],
      image: "./images/photo-edit.png",
    },
    {
      title: "Service-Providers",
      subtitle: "Web application developed to hire service providers.",
      description:
        "This is a module created with Laravel 10 and React, to be integrated into the client's main WordPress website, with the aim of giving the clients with whom it works an option to hire service providers; For this, it provides the user with a list of suppliers by category, from which they can select and see the contact information of the supplier they prefer.",
      technologies: ["Laravel 10", "ReactJS", "TailwindCSS", "CSV"],
      image: "./images/adk-immo.png",
    },
    {
      title: "Servisco",
      subtitle: "Web application developed for the management of daily operations of the company of the same name.",
      description:
        "It is responsible for the visualization and control of all the orders of clients they handle, agencies and agents with whom they work, operators, designers, in Finally, it is responsible for controlling and making all the daily operations of the company viable. This is an improved version of a previous one, to which the workflow was improved and optimized for the tasks it already performed and new functionalities were added such as:\- the management of tasks (operator appointments with clients on the day) for operators with the use of the calendar directly synchronized from the servisco app with google calendar.\- the option to see in real time the position of the operators who have rounds and/or appointments during the day, as well as their trajectory since the beginning of the working day.",
      technologies: ["ReactJs", "BootstrapCss", "Less", "Tokens"],
      image: "./images/servisco-calendar.png",
    },
    {
      title: "Drag & Drop",
      subtitle: "Web application responsible for categorizing the images taken by the operators.",
      description:
        "Web application developed with Laravel and VueJS, it is responsible for categorizing the images taken by the operators after their daily rounds taking into account the areas of the property to which they belong, as well as their priority, in this way the designers can know Which images are most important to retouch before putting them online on client properties.",
      technologies: ["Laravel 10", "VueJS", "BootsrapCSS", "Less", "Token"],
      image: "./images/D&D.png",
    },
    {
      title: "Servisco-Carte-Module",
      subtitle: "Web application to get the properties route to visit using google api.",
      description:
        "Cactus Media is a marketing agency belonging to a marketing company based in Belgium and branches in several Latin American countries, such as in this case Mexico. It frequently visits the properties it needs to promote, whether for sale or rent, with the objective of taking as many characteristics of these goods as possible. With the objective of optimizing the routes of the properties to be visited on the day by the operators, this module is created, which allows the user to know about the property to visit which operator is closest, how long it would take to arrive and the next property. close to visit in the day; It also allows you to know from the operators which are the two closest alternatives to the property you wish to visit.",
      technologies: ["Laravel", "ReactJS", "BootstrapCSS", "Less", "Token"],
      image: "./images/module-carte-google.png",
    },
    {
      title: "PDF-Customize",
      subtitle: "Web application to process and invoice digital products to customers.",
      description:
        "Cactus Media is a marketing agency belonging to a marketing company based in Belgium and branches in several Latin American countries, such as Mexico in this case. Many times, clients within the services they choose prefer to obtain a PDF or Brochure of the property they want to market with a compendium of all its main characteristics, almost a hard copy of a web page, in order to present it to potential interested parties. This project does exactly this, it automates the creation of a pdf with all that information, it can be customized by the user before generating it or, failing that, it can be generated with the default option offered by the application, it has the novelty of printing a qr code on the cover page that allows whoever scans it to obtain the pdf itself digitally. This, as well as other projects, are part of the improvement and optimization of the workflow of the company's Marketing team, triggering better performance at the company level and more satisfaction of customers loyal to it.",
      technologies: ["Laravel", "Jquery","Ajax", "TailwindCSS", "S3", "Dropbox", "Token"],
      image: "./images/pdf-module.png",
    },
    {
      title: "Orders App",
      subtitle: "Web application to process orders and tickets from clients.",
      description:
        "This application manages all orders of cactus made by clients, the clients take one or more packages availables ( drone pictures, property videos, plans design by example) in the company and from here  it is created, processed, finished and paid.",
      technologies: ["Django", "Angular","Mysql", "Crons", "Telescope", "Dropbox", "Token"],
      image: "./images/orders-app.png",
    },
    {
      title: "Invoice App",
      subtitle: "Web application to process and invoice digital products to customers.",
      description:
        "Cactus Media is a marketing agency belonging to a marketing company based in Belgium and with branches in various Latin American countries, such as Mexico in this case. They work with clients who hire complete packages or independent services, such as property photography service, custom website creation, among many more. These services were billed through a third-party application. The development of their own application allowed them significant savings since only 3 months of its use are equivalent to the annual payment that they had to make for the use of the third-party application, adding to this the customization and privatization of the application according to its own characteristics and company requirements.",
      technologies: ["Laravel", "Jquery", "TailwindCSS", "S3", "Ninja Invoice api", "Token"],
      image: "./images/invoice-app.png",
    },
    {
      title: "Minisites App",
      subtitle: "Web applications automated from a small and customized cms.",
      description:
        "Cactus Media is a marketing agency belonging to a marketing company based in Belgium and branches in several Latin American countries, such as Mexico in this case. Among the services they offer is the creation of complete personalized web pages for the presentation of independent properties. Creating a complete web page can be complicated, sometimes not so much when the steps are known, but it usually saves time by having the creation of these web applications automated from a small and customized cms. For this reason, this project is important for the company, since through the consumption of an api, with the necessary data to display, and with different templates to choose from, the completion of these personalized websites only takes a couple of configurations and a click to be publish with it own domain or using a subdomain previously selected in a full automatic way. This is a hybrid app because you can access it dashboard independently or from an api endpoint to create websites automatically, it uses swagger to document the endpoints developed.",
      technologies: ["Laravel-Livewire", "AlpineJs", "TailwindCSS", "Telescope", "Mapbox api", "S3", "Swagger", "Token", "Cron"],
      image: "./images/minisites.png",
    },
    {
      title: "DesignerAPP",
      subtitle: "Web application for tasks designer editing.",
      description:
        "Basically, this application is to publish new tasks for the design teams, who can choose the type of task to be carried out, retouch/edit photos, videos, positions of points of interest, real estate plans, put the best images online, different types of design tasks to finish a contracted customer order in a fast and optimized way.",
      technologies: [".Net", "ReactJS", "Mysql", "Google api", "Crons"],
      image: "./images/designer.png",
    },
    {
      title: "BookAtMe",
      subtitle: "Web application for the reservation of rental houses in Cuba.",
      description:
        "For the development of this Web application the languages ​​HTML, Rails, ReactJS, CSS were used, with the frameworks Ruby on Rails, Bootstrap, ReactJS and for the control of changes to Git. It allows you to see the availability of rental houses registered in the application, as well as access to your photo gallery, contact information and how to get there after the reservation sent to your email, different payment methods allowed by the hostel through virtual wallets and bank transfers due to the situation in the Cuban country. For registered users on the web, it provides live chat with those responsible for the house as well as with the web administrators. As a novelty, it includes the programming that only users who have completed a reservation in a hostel can leave their review, thus avoiding the false reviews that abound in other portals due to their lack of security, where any person, even if they have never even contacted those of the house can leave a review with a bad or good rating without any criteria. It allows the hostel owner to send a review link via email to other guests who have not booked their home through this portal and can leave their opinion, it is reviewed and verified by the web administrators so that the client can leave a photo to prove your visit to the hostel before the review is officially published on the web.",
      technologies: ["Ruby on Rails", "ReactJS", "BootstrapCSS", "Mysql"],
      image: "./images/book-at-me.png",
    },
    {
      title: "TunDaapo",
      subtitle: "CMS, BLOG and Portal WEB.",
      description:
        "Portal to inform about the services offered by the freelancer agency for Marketing, Design and Digital Marketing, includes a blog to keep updated about relevant news from the agency and the world on these issues. Developed oriented to UI and UX, CMS. For its elaboration, PHP, HTML, Javascript, CSS were used, through frameworks Laravel, Bootstrap, VueJS supported for the control of changes in Git. For registered users on the web, it provides live chat with those responsible for the agency, as well as the web. It includes the option to share the posts that the user likes on social networks, as well as leave reviews for them. Fully SEO oriented and optimized.",
      technologies: ["Laravel", "VueJS", "Pusher", "Mysql"],
      image: "./images/tun-daapo.png",
    },
    {
      title: "ConSUM",
      subtitle: "Application to offer a menu of dishes from a restaurant to the customer.",
      description:
        "Where he can choose his final order and automatically be transferred to the queue of orders from the kitchen and bar for their respective processing, speeding up the service, having less margin of error when taking orders by a salon clerk, as well as greater privacy for clients. This application was developed in team with the HTML, PHP, JavaScript and CSS languages, using the Laravel and VueJS frameworks, as well as the Git change control tool, such as the Atom programming IDE.",
      technologies: ["Laravel", "Javascript", "Mysql"],
      image: "./images/consum.png",
    },
    {
      title: "DIOPet",
      subtitle: "Application to control arrivals and departures of workers.",
      description:
        "Application consisted of 2 parts, one developed for the web and the other for the use of mobiles with android operating system, it was developed by 2 teams of programmers, one for each part, where my role was in the design and development of the web application together with other developers.The function of the application developed for the web is to generate a QR code, which contains the arrival date and a random identification provided by the application itself, which must be scanned by the employee from their android device by the application developed for it. It also allows the automatic synchronization of both applications, the generation of reports and graphics; as well as the option of manually introducing employees who do not have mobile phones, or those whose mobile phones do not have an android operating system, by the HR department administrator. In addition, it allows to automatically know employees with arrivals at the limit, late, or absences.The objective of this project is to facilitate the control of the entry and exit of workers to the company, you have the option of being able to link to other programs, previously configured, They offer additional and more specific data on the employees of the place. This application was developed with the HTML, PHP, JavaScript and CSS languages, using the Laravel and VueJS frameworks, as well as the Git change control tool. The web application was developed to work from the company's intranet, thus avoiding access from external places in order to circumvent the reason for creating the application itself, not so with the android mobile app, since obviously it will reside in each of workers' mobiles.The mobile application is intended for scanning the QR code, which will be modified by the android app in order to be updated in BD, this time with the initial QR data plus the unique identification of the employee, as well as the scan time .The union of these two applications strengthens the work of the HR department and speeds up the process of registering entries and exits of the company, given their speed and security.",
      technologies: ["Laravel", "VueJS", "Mysql"],
      image: "./images/diopet.png",
    },
    {
      title: "ECOM",
      subtitle: "WEB on the company's intranet to report details of the company as well as statistical sales data.",
      description:
        "This application was also my graduation thesis, it works as a web portal for the branch, HTML, CSS, PHP and JavaScript were used, with the CodeIgniter and ExtJS frameworks, with an MVC architecture, as well as an object-oriented programming, a rs2 and rs4 encoding.This project was migrated during my work in Caracol to Laravel and AngularJS frameworks.",
      technologies: ["Codeigniter", "ExtJS", "Laravel", "AngularJS", "Mysql"],
      image: "./images/ecom.png",
    },
    // Más proyectos...
  ];
  
  // Función para truncar texto
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };
  
  // Renderizar Proyectos
  const renderProjects = () => {
    const projectGrid = document.querySelector(".project-grid");
    projects.forEach(({ title, subtitle, description, technologies, image }) => {
      const project = document.createElement("div");
      project.classList.add("project");
  
      // Truncar descripción inicial
      const truncatedDescription = truncateText(description, 150);
  
      project.innerHTML = `
        <img src="${image}" alt="${title}">
        <h3>${title}</h3>
        <span>${subtitle}</span>
        <p class="description">${truncatedDescription}</p>
        <p class="full-description" style="display: none;">${description}</p>
        <span class="read-more">Leer más</span>
        <p><strong>Tecnologías:</strong> ${technologies.join(", ")}</p>
      `;
  
      // Añadir evento para mostrar descripción completa
      const readMore = project.querySelector(".read-more");
      const descriptionElement = project.querySelector(".description");
      const fullDescriptionElement = project.querySelector(".full-description");
  
      readMore.addEventListener("click", () => {
        if (fullDescriptionElement.style.display === "none") {
          descriptionElement.style.display = "none";
          fullDescriptionElement.style.display = "block";
          readMore.textContent = "Leer menos";
        } else {
          descriptionElement.style.display = "block";
          fullDescriptionElement.style.display = "none";
          readMore.textContent = "Leer más";
        }
      });
  
      projectGrid.appendChild(project);
    });
  };
  
  // Mostrar/Ocultar Menú en Móviles
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("show");
  });
  
  // Suavizar desplazamiento al hacer clic en los enlaces del menú
  document.querySelectorAll(".menu a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const offset = document.querySelector(".navbar").offsetHeight;
      const targetPosition = target.offsetTop - offset - 10;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    });
  });
  
  renderProjects();