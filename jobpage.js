const jobs = [
    {
      title: "Project Admin",
      subtitle: "PT Frisian Flag",
      image: "frisianflag2.jpg",
      details: "Manage administrative tasks, including planning, coordinating, controlling, executing, and reporting on all activities related to Project Juno based in Cikarang.",
      openPositions: "2",
      link: "#",
      salary: "Rp. 6,500,000 - 7,000,000",
      location: "Cikarang, Indonesia"  
    },
  
    {
      title: "Admin Staff",
      subtitle: "PT Human Protalent Indonesia",
      image: "pt.jpeg",
      details: "Responsible for the process of requesting signatures and contract company seals. Create company sales and purchase invoice reports.",
      openPositions: "3",
      link: "#",
      salary: "Rp. 6,000,000 - 8,000,000",
      location: "Jakarta, Indonesia",
    },
  
    {
      title: "Mobile Developer",
      subtitle: "Apple Inc",
      image: "apple2.png",
      details: "Designing and building advanced applications for the iOS platform. Collaborating with cross-functional teams to define, design, and ship new features",
      openPositions: "1",
      link: "#",
      salary: "$15,000 - 20,000",
      location: "California, USA",
    },
  
    {
      title: "Security Analyst",
      subtitle: "Alphabet Inc",
      image: "google2.png",
      details: "Monitor our networks for security breaches and investigate when one occurs. Use and maintain software, such as firewalls and data encryption programs, to protect sensitive information.",
      openPositions: "1",
      link: "#",
      salary: "$10,000 - 12,000",
      location: "California, USA",
    },
  
    {
      title: "Product Planner",
      subtitle: "Mitsubishi Motors",
      image: "mitsub.png",
      details:
        "Responsible for all of the internally focused decisions, steps, and tasks necessary to develop a successful product. In other words, it involves everything you must do that affects the product itself.",
      openPositions: "4",
      link: "#",
      salary: "MYR 1,500 - 2,000",
      location: "Selangor, Malaysia",
    },
  
    {
      title: "Marketing Manager",
      subtitle: "PT Bank Mandiri",
      image: "mandiiri.png",
      details: "Responsible for analyzing digital campaign data and provide insight into campaign results. Develop and implement effective digital marketing strategies. ",
      openPositions: "1",
      link: "#",
      salary: "Rp. 10,000,000 - 12,000,000",
      location: "Jakarta, Indonesia",
    },
    ];
  
    const jobsHeading = document.querySelector(".jobs-list-container h2");
    const jobsContainer = document.querySelector(".jobs-list-container .jobs");
    const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
    let searchTerm = "";
  
    if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
    } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
    }
  
    const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
        
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");

        let subtitle = document.createElement("h4");
        subtitle.innerHTML = job.subtitle;
        subtitle.classList.add("job-subtitle");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");

      let salary = document.createElement("p");
      salary.classList.add("job-salary");
      salary.innerHTML = `${job.salary}`;

      let location = document.createElement("p");
      location.classList.add("job-location");
      location.innerHTML = `${job.location}`;

        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(subtitle);
        jobCard.appendChild(details);
        jobCard.appendChild(salary); // Append salary information
        jobCard.appendChild(location); // Append location information
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });