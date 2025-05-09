
<head> 
<link rel="stylesheet" href="carouselStyle.css">
</head>




  
# About Me  

Welcome to my cyber security portfolio website! I am Trent Cubine, a driven professional with a strong foundation in both web development and cyber security. With a background in web technologies, network security, and threat analysis, I specialize in building secure systems and conducting detailed security analyses.

I have hands-on experience in developing and maintaining secure web environments, most recently as a Digital Producer at Belk, where I worked on e-commerce platforms and digital marketing initiatives. Additionally, my role as a Jr. Web Developer at Mission Wired involved building secure donation websites for clients, optimizing performance, and executing impactful email campaigns.

I am continuously expanding my skills in cyber security through my academic background, including a BA in Mass Communication with a minor in Computer Science, as well as certifications like Google’s Cyber Security Specialization and CompTIA Security+.

In my portfolio, you'll find several projects that showcase my skills in security, such as deploying my own SIEM system using Microsoft Azure and developing a Python-based Wi-Fi sniffer tool for network security analysis.

Explore my work and feel free to reach out to discuss how my expertise can help enhance your organization’s security posture.

<br /> 

![Branching](0_3.png)

<br /> 


# Social Media Accounts and Platform Links 

[LinkedIn](https://www.linkedin.com/in/trent-cubine-268539110/)  [Try Hack Me](https://tryhackme.com/p/2EZ) [Code Wars](https://www.codewars.com/users/2EZ)

<br />

# Certifications 

1. Google Cybersecurity Specialization
2. CompTIA Security+
3. TryHackMe Cyber Security 101 Path 

<br /> 



<div id="certification-carousel" class="carousel">
  <div class="carousel-images">
    <img src="CompTIASecPlus.jpg" alt="Comptia Security Plus" />
    <img src="GoogleCyberSecurityCertificate.jpeg" alt="Google Cyber Security Certification" />
    <img src="THM-CyberSecurity101.jpg" alt="Try Hack Me Cyber Security 101 Pathway Certificate" />
  </div>
  <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
  <button class="next" onclick="moveSlide(1)">&#10095;</button>
</div>



<br /> 


# Projects

<br />

![Branching](Azure_New_Image.jpg)

<br /> 

### Creating a SIEM in Microsoft Azure leveraging Microsoft Sentinel 

In this project I created a SIEM system in Microsoft Azure by leveraging Microsoft Sentinel. I launched a VM and created a log analytics workspace where I enabled Microsoft Sentinel. I then connected the VM as a data source and created analytic rules to flag specific instances from the VMs logs. 


[You can see my documentation of this project here](Building my own SIEM v3.pdf)



<br /> 
<br /> 

![Branching](Cisco_packet_Tracer.jpg)

<br /> 

### CISCO Packet Tracer Projects  

I keep a repository of Cisco Packet Tracer Projects I've compleated. Each Project resides in it's own folder with its PKT file and a PDF with the project's goals and background work. In my Cisco Packet Tracer project repository, I showcase a variety of networking designs that demonstrate my proficiency in configuring and troubleshooting networks. These projects cover key concepts such as VLANs, routing protocols, network security, and IP addressing, with real-world applications like designing campus networks and implementing VPNs. Through hands-on experience, I've gained a deep understanding of network design, security, and management, which I’m eager to apply in professional settings. 

[You can see these projects here.](https://github.com/2EZ2break/Packet-Tracer-Projects)


<br /> 
<br /> 

![Branching](tryhackme_logo_full.svg)

<br /> 

### TryHackMe Progress 

I am currently ranked within the top 10% of users on the TryHackMe platform. This hands-on lab experience has been a critical part of my learning journey, allowing me to develop practical skills in areas such as network security, vulnerability assessment, incident response, and security operations. Each room has helped strengthen my technical knowledge and problem-solving abilities while exposing me to real-world scenarios and tools commonly used by cybersecurity professionals. 


<br /> 

![Branching](Python_Image.png)

<br /> 

### Python Projects

maintain a GitHub repository of Python scripts focused on cybersecurity and penetration testing. One featured script, EtcEnumerator.py, automates the enumeration of critical system configuration files in the /etc/ directory (e.g., /etc/passwd, /etc/os-release, /etc/hostname) to extract valuable system information. More of my projects are available on my GitHub. 

[Click here to visit the Repository.](https://github.com/2EZ2break/python-Projects)

<br /> 
<br /> 
<br />


# Cyber Content I Love

Darknet Diaries - Sam Bent - Pirate Software - Mental Outlaw - DEFCONconference

<br /> 
<br /> 

# Hobbies

Video Games - College Football - Formula 1 - Youtube - Chess

<br /> 


<script>
let slideIndex = 0;

function moveSlide(step) {
  let slides = document.querySelectorAll(".carousel-images img");
  slideIndex += step;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;  // Go to the last slide
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;  // Go back to the first slide
  }

  // Hide all slides and display the current one
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.visibility = "visible"; // Make the current slide visible
      slide.style.opacity = 1; // Fade in the current slide
    } else {
      slide.style.visibility = "hidden"; // Hide the other slides
      slide.style.opacity = 0; // Fade them out
    }
  });
}

// Initialize carousel by showing the first image
document.addEventListener('DOMContentLoaded', () => {
  moveSlide(0); // Show the first slide
});
</script>


