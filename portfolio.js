// portfolio.js

const projects = [
    {
      title: { en: "Photo-Edit", es: "Photo-Edit" },
      subtitle: {
        en: "Web application to create photo albums automatically.",
        es: "Aplicación web para crear álbumes de fotos automáticamente.",
      },
      description: {
        en: "Developed using PHP with Laravel as a framework and JavaScript, it is responsible for automatically developing a photo album with relevant information on properties previously configured according to the agency. In addition, it gives the opportunity to manually modify one or more of the images of a selected property.",
        es: "Desarrollada usando PHP con Laravel como framework y JavaScript, esta aplicación crea automáticamente un álbum de fotos con información relevante sobre propiedades previamente configuradas según la agencia. Además, permite modificar manualmente una o más imágenes de una propiedad seleccionada.",
      },
      technologies: ["Laravel 11", "JavaScript", "FabricJs", "AWS", "Dropbox"],
      image: "./images/photo-edit.png",
    },
    {
      title: { en: "Service-Providers", es: "Proveedores de Servicio" },
      subtitle: {
        en: "Web application developed to hire service providers.",
        es: "Aplicación web desarrollada para contratar proveedores de servicios.",
      },
      description: {
        en: "This module, created with Laravel 10 and React, works with a WordPress multisite. Its goal is to provide clients you work with across multiple sites with an option to hire service providers. To do this, it provides the user with a list of providers by category, from which they can select and view the contact information for the provider they prefer.",
        es: "Este módulo, creado con Laravel 10 y React, funciona con un multisitio de WordPress. Su objetivo es proporcionar a los clientes que trabajan en múltiples sitios una opción para contratar proveedores de servicios. Para ello, ofrece al usuario una lista de proveedores por categoría, desde la cual pueden seleccionar y ver la información de contacto del proveedor que prefieran.",
      },
      technologies: ["Laravel 10", "ReactJS", "TailwindCSS", "CSV"],
      image: "./images/adk-immo.png",
    },
    {
      title: { en: "Servisco", es: "Servisco" },
      subtitle: {
        en: "Web application developed for the management of daily operations of the company of the same name.",
        es: "Aplicación web desarrollada para la gestión de operaciones diarias de la empresa del mismo nombre.",
      },
      description: {
        en: "It is responsible for the visualization and control of all the orders of clients they handle, agencies and agents with whom they work, operators, designers, in Finally, it is responsible for controlling and making all the daily operations of the company viable. This is an improved version of a previous one, to which the workflow was improved and optimized for the tasks it already performed and new functionalities were added such as:\n- the management of tasks (operator appointments with clients on the day) for operators with the use of the calendar directly synchronized from the servisco app with google calendar.\n- the option to see in real time the position of the operators who have rounds and/or appointments during the day, as well as their trajectory since the beginning of the working day.",
        es: "Es responsable de la visualización y control de todas las órdenes de clientes, agencias y agentes con los que trabajan, operadores, diseñadores, etc. En definitiva, gestiona y hace viables todas las operaciones diarias de la empresa. Es una versión mejorada de una anterior, con un flujo de trabajo optimizado y funcionalidades nuevas como:\n- la gestión de tareas (citas de operadores con clientes) mediante el calendario sincronizado con Google Calendar desde la app de Servisco.\n- la posibilidad de ver en tiempo real la posición y recorrido de los operadores con rondas o citas durante el día desde el inicio de la jornada laboral.",
      },
      technologies: ["ReactJs", "BootstrapCss", "Less", "Tokens"],
      image: "./images/servisco-calendar.png",
    },
    {
      title: { en: "Drag & Drop", es: "Arrastrar y Soltar" },
      subtitle: {
        en: "Web application responsible for categorizing the images taken by the operators.",
        es: "Aplicación web para categorizar imágenes tomadas por los operadores.",
      },
      description: {
        en: "Web application developed with Laravel and VueJS, it is responsible for categorizing the images taken by the operators after their daily rounds taking into account the areas of the property to which they belong, as well as their priority, in this way the designers can know Which images are most important to retouch before putting them online on client properties.",
        es: "Aplicación web desarrollada con Laravel y VueJS, encargada de categorizar las imágenes tomadas por los operadores tras sus rondas diarias, considerando las áreas de la propiedad a las que pertenecen y su prioridad. Así, los diseñadores pueden saber cuáles imágenes retocar primero antes de publicarlas en las propiedades de los clientes.",
      },
      technologies: ["Laravel 10", "VueJS", "BootsrapCSS", "Less", "Token"],
      image: "./images/D&D.png",
    },
      {
    title: {
      en: "Orders App",
      es: "Aplicación de Pedidos",
    },
    subtitle: {
      en: "Web application to process orders and tickets from clients.",
      es: "Aplicación web para procesar pedidos y tickets de clientes.",
    },
    description: {
      en: "This application manages all orders of cactus made by clients, the clients take one or more packages availables (drone pictures, property videos, plans design by example) in the company and from here it is created, processed, finished and paid.",
      es: "Esta aplicación gestiona todos los pedidos de Cactus realizados por los clientes, quienes toman uno o más paquetes disponibles (fotos con dron, videos de propiedades, planos, por ejemplo). Desde aquí se crean, procesan, finalizan y pagan.",
    },
    technologies: ["Django", "Angular", "Mysql", "Crons", "Telescope", "Dropbox", "Token"],
    image: "./images/orders-app.png",
  },
  {
    title: {
      en: "Invoice App",
      es: "Aplicación de Facturación",
    },
    subtitle: {
      en: "Web application to process and invoice digital products to customers.",
      es: "Aplicación web para procesar y facturar productos digitales a los clientes.",
    },
    description: {
      en: "Cactus Media is a marketing agency belonging to a marketing company based in Belgium and with branches in various Latin American countries, such as Mexico in this case. They work with clients who hire complete packages or independent services, such as property photography service, custom website creation, among many more. These services were billed through a third-party application. The development of their own application allowed them significant savings since only 3 months of its use are equivalent to the annual payment that they had to make for the use of the third-party application, adding to this the customization and privatization of the application according to its own characteristics and company requirements.",
      es: "Cactus Media es una agencia de marketing perteneciente a una empresa con sede en Bélgica y sucursales en varios países de América Latina, como en este caso México. Trabajan con clientes que contratan paquetes completos o servicios independientes, como fotografía de propiedades, creación de sitios web personalizados, entre otros. Estos servicios se facturaban mediante una aplicación de terceros. El desarrollo de su propia aplicación les permitió un ahorro significativo, ya que solo tres meses de uso equivalen al pago anual que debían realizar por la aplicación de terceros, sumado a la personalización y adaptación a las características y requisitos de la empresa.",
    },
    technologies: ["Laravel", "Jquery", "TailwindCSS", "S3", "Ninja Invoice api", "Token"],
    image: "./images/invoice-app.png",
  },
  {
    title: {
      en: "Minisites App",
      es: "Aplicación de Minisitios",
    },
    subtitle: {
      en: "Web applications automated from a small and customized cms.",
      es: "Aplicaciones web automatizadas desde un CMS pequeño y personalizado.",
    },
    description: {
      en: "Cactus Media is a marketing agency belonging to a marketing company based in Belgium and branches in several Latin American countries, such as Mexico in this case. Among the services they offer is the creation of complete personalized web pages for the presentation of independent properties. Creating a complete web page can be complicated, sometimes not so much when the steps are known, but it usually saves time by having the creation of these web applications automated from a small and customized cms. For this reason, this project is important for the company, since through the consumption of an api, with the necessary data to display, and with different templates to choose from, the completion of these personalized websites only takes a couple of configurations and a click to be publish with it own domain or using a subdomain previously selected in a full automatic way. This is a hybrid app because you can access it dashboard independently or from an api endpoint to create websites automatically, it uses swagger to document the endpoints developed.",
      es: "Cactus Media es una agencia de marketing perteneciente a una empresa con sede en Bélgica y sucursales en varios países de América Latina, como en este caso México. Entre los servicios que ofrece está la creación de sitios web completos personalizados para la presentación de propiedades independientes. Crear una web completa puede ser complicado, pero automatizar el proceso con un CMS personalizado ahorra mucho tiempo. Por eso este proyecto es importante: permite generar sitios web con solo configurar unos datos y elegir una plantilla. Se puede publicar con dominio propio o subdominio automáticamente. Es una aplicación híbrida, ya que se puede usar como panel independiente o como endpoint desde una API. Usa Swagger para documentar los endpoints desarrollados.",
    },
    technologies: ["Laravel-Livewire", "AlpineJs", "TailwindCSS", "Telescope", "Mapbox api", "S3", "Swagger", "Token", "Cron"],
    image: "./images/minisites.png",
  },
  {
    title: {
      en: "DesignerAPP",
      es: "DesignerAPP"
    },
    subtitle: {
      en: "Web application for tasks designer editing.",
      es: "Aplicación web para la edición de tareas de diseño."
    },
    description: {
      en: "This application is used to publish new tasks for design teams, who can choose the type of task to carry out: retouch/edit photos, videos, points of interest, property floor plans, put the best images online, etc. These tasks help complete customer orders quickly and efficiently.",
      es: "Esta aplicación se utiliza para publicar nuevas tareas para los equipos de diseño, quienes pueden elegir el tipo de tarea a realizar: retocar/editar fotos, videos, puntos de interés, planos de propiedades, poner en línea las mejores imágenes, etc. Estas tareas ayudan a completar los pedidos de los clientes de forma rápida y eficiente."
    },
    technologies: [".Net", "ReactJS", "Mysql", "Google API", "Crons"],
    image: "./images/designer.png"
  },
  {
    title: {
      en: "BookAtMe",
      es: "BookAtMe"
    },
    subtitle: {
      en: "Web application for booking rental houses in Cuba.",
      es: "Aplicación web para reservar casas de alquiler en Cuba."
    },
    description: {
      en: "Developed with HTML, Rails, ReactJS, and CSS, it allows users to check the availability of rental houses, see their galleries, contact details, and receive directions. Only users with completed reservations can leave verified reviews, preventing fake feedback. The app includes live chat, multiple payment options, and admin-verified photo proof for review authenticity.",
      es: "Desarrollada con HTML, Rails, ReactJS y CSS, permite a los usuarios verificar la disponibilidad de casas de alquiler, ver sus galerías, datos de contacto y recibir direcciones. Solo los usuarios con reservas completadas pueden dejar reseñas verificadas, evitando opiniones falsas. La app incluye chat en vivo, múltiples métodos de pago y verificación por foto para garantizar la autenticidad de las reseñas."
    },
    technologies: ["Ruby on Rails", "ReactJS", "BootstrapCSS", "Mysql"],
    image: "./images/book-at-me.png"
  },
  {
    title: {
      en: "TunDaapo",
      es: "TunDaapo"
    },
    subtitle: {
      en: "CMS, BLOG and Web Portal.",
      es: "CMS, BLOG y Portal Web."
    },
    description: {
      en: "Portal for promoting marketing and design services with a built-in blog to share agency and industry news. Features include live chat for registered users, SEO optimization, and social media sharing. Built with Laravel, Bootstrap, VueJS, and Git.",
      es: "Portal para promover servicios de marketing y diseño con un blog integrado para compartir noticias de la agencia y del sector. Incluye chat en vivo para usuarios registrados, optimización SEO y opción para compartir publicaciones en redes sociales. Desarrollado con Laravel, Bootstrap, VueJS y Git."
    },
    technologies: ["Laravel", "VueJS", "Pusher", "Mysql"],
    image: "./images/tun-daapo.png"
  },
  {
    title: {
      en: "ConSUM",
      es: "ConSUM"
    },
    subtitle: {
      en: "Application to offer a restaurant menu to customers.",
      es: "Aplicación para ofrecer el menú de un restaurante a los clientes."
    },
    description: {
      en: "Customers can place orders directly from their device, which are instantly sent to kitchen and bar queues. This reduces errors, speeds up service, and increases privacy. Developed in a team using Laravel and VueJS with Git and Atom.",
      es: "Los clientes pueden hacer pedidos directamente desde su dispositivo, que se envían automáticamente a la cocina y al bar. Esto reduce errores, acelera el servicio y mejora la privacidad. Desarrollada en equipo usando Laravel y VueJS con Git y Atom."
    },
    technologies: ["Laravel", "Javascript", "Mysql"],
    image: "./images/consum.png"
  },
  {
    title: {
      en: "DIOPet",
      es: "DIOPet"
    },
    subtitle: {
      en: "Application to track employee arrivals and departures.",
      es: "Aplicación para controlar entradas y salidas de empleados."
    },
    description: {
      en: "Consists of a web and mobile app. The web app generates QR codes for employees to scan with an Android app to register their arrival. Includes sync between systems, manual entry, real-time reports, and connection to HR tools. Built with Laravel and VueJS, deployed on a secure intranet.",
      es: "Consta de una app web y una app móvil. La web genera códigos QR que los empleados escanean con una app Android para registrar su llegada. Incluye sincronización entre sistemas, ingreso manual, reportes en tiempo real y conexión con herramientas de RRHH. Desarrollada con Laravel y VueJS, desplegada en una intranet segura."
    },
    technologies: ["Laravel", "VueJS", "Mysql"],
    image: "./images/diopet.png"
  },
  {
    title: {
      en: "ECOM",
      es: "ECOM"
    },
    subtitle: {
      en: "Intranet portal for company stats and reports.",
      es: "Portal de intranet para estadísticas y reportes de la empresa."
    },
    description: {
      en: "Originally created as a thesis project. Provides sales statistics and internal reports. Initially built with CodeIgniter and ExtJS, later migrated to Laravel and AngularJS.",
      es: "Originalmente desarrollado como proyecto de tesis. Ofrece estadísticas de ventas y reportes internos. Inicialmente creado con CodeIgniter y ExtJS, luego migrado a Laravel y AngularJS."
    },
    technologies: ["Codeigniter", "ExtJS", "Laravel", "AngularJS", "Mysql"],
    image: "./images/ecom.png"
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

  function switchLanguage() {
    const lang = document.getElementById('language').value;
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
      renderProjects(lang);
    });
  }
  
  // Renderizar Proyectos
  const renderProjects = (lang = 'es') => {
    const projectGrid = document.querySelector(".project-grid");
    projectGrid.innerHTML = ""; // Limpiar contenido anterior

    projects.forEach(({ title, subtitle, description, technologies, image }) => {
      const project = document.createElement("div");
      project.classList.add("project");

      const translatedTitle = title[lang];
      const translatedSubtitle = subtitle[lang];
      const translatedDescription = description[lang];

      const truncatedDescription = truncateText(translatedDescription, 150);

      project.innerHTML = `
        <img src="${image}" alt="${translatedTitle}">
        <h3 data-lang="${lang}">${translatedTitle}</h3>
        <span>${translatedSubtitle}</span>
        <p class="description" data-lang="${lang}">${truncatedDescription}</p>
        <p class="full-description" data-lang="${lang}" style="display: none;">${translatedDescription}</p>
        <span class="read-more">${lang === 'es' ? 'Leer más' : 'Read more'}</span>
        <p><strong>${lang === 'es' ? 'Tecnologías' : 'Technologies'}:</strong> ${technologies.join(", ")}</p>
      `;

      const readMore = project.querySelector(".read-more");
      const descriptionElement = project.querySelector(".description");
      const fullDescriptionElement = project.querySelector(".full-description");

      readMore.addEventListener("click", () => {
        const isExpanded = fullDescriptionElement.style.display !== "none";
        descriptionElement.style.display = isExpanded ? "block" : "none";
        fullDescriptionElement.style.display = isExpanded ? "none" : "block";
        readMore.textContent = isExpanded ? (lang === 'es' ? 'Leer más' : 'Read more') : (lang === 'es' ? 'Leer menos' : 'Read less');
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
      
      let hrefOut = e.target.href;
      if(hrefOut.indexOf('cv.html')>-1){
        window.location.href=hrefOut;
      }
      
      if(target!=undefined){
        const offset = document.querySelector(".navbar").offsetHeight;
        const targetPosition = target.offsetTop - offset - 10;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });
  
  renderProjects('es');
  window.onload = switchLanguage;