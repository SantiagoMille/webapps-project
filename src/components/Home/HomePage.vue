<template>
  <div id="app">
    <v-app>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        style="position:fixed; top:0; left:0; overflow-y:scroll;"
        temporary>
        <v-list nav dense>

        
          <v-list-item href="./research">
            <v-list-item-icon>
              <v-icon>mdi-feature-search-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Research</v-list-item-title>
          </v-list-item>

          <v-list-item href="./#cv">
            <v-list-item-icon>
              <v-icon>mdi-file-account</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>Resume</v-list-item-title>
            
          </v-list-item>

          <v-list-item href="./projects">
            <v-list-item-icon>
              <v-icon>mdi-tools</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>Projects</v-list-item-title>
            
          </v-list-item>

          <v-list-item href="./interests">
            <v-list-item-icon>
              <v-icon>mdi-heart</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>Interests</v-list-item-title>
            
          </v-list-item>

          <v-list-item href="./blog">
            <v-list-item-icon>
              <v-icon>mdi-chat</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>Blog</v-list-item-title>
            
          </v-list-item>

        </v-list>
      </v-navigation-drawer>

      <v-app-bar 
        app
        color="#4C6665"
        height="100"
        inverted-scroll
        scroll-threshold='5'
        clipped-right
        elevation="0">
        <a href = './'><v-avatar

          class="mr-3"
          color="#4C6665"
          size="70"
        >
          <v-img
            contain
            max-height="70%"
            src="@/assets/logo.png"
          ></v-img>
        </v-avatar></a>
        
        <v-spacer></v-spacer>

        <v-btn title="Research" href='./research' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-feature-search-outline</v-icon>
        </v-btn>
        <v-btn title="Resume" @click="$vuetify.goTo('#cv')" v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-file-account</v-icon>
        </v-btn>
        <v-btn title="Projects" href='./projects' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-tools</v-icon>
        </v-btn>
        <v-btn title="Interests" href="./interests" v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-heart</v-icon>
        </v-btn>
        <v-btn title="Blog" href='./blog' v-if="$vuetify.breakpoint.mdOnly||$vuetify.breakpoint.lgOnly||$vuetify.breakpoint.xlOnly" icon style="color:white">
          <v-icon large>mdi-chat</v-icon>
        </v-btn>
        <v-btn v-if="$vuetify.breakpoint.smOnly||$vuetify.breakpoint.xsOnly" icon style="color:white" @click="drawer = !drawer">
          <v-icon large>mdi-menu</v-icon>
        </v-btn>
        
        

      </v-app-bar>

      <v-content>
        <section id="hero">
          <v-row no-gutters>
            <div
              class="color"
              
            >
              <v-theme-provider dark>
                <v-container fill-height>
                  <v-row
                    align="center"
                    class="white--text mx-auto"
                    justify="center"
                  >
                    <v-col
                      class="white--text text-start"
                      cols="12"
                      tag="h1"
                    >
                      <span
                        class="font-weight-light"
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      >
                        Hello, I'm Santiago Mille and I
                      </span>

                      <br>

                      <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1 '+color: 'display-2 '+color]"
                        class="font-weight-black"
                      >
                        {{text}}
                      </span>

                    </v-col>
                    <v-col class="padding-top align-self-end">
                      <v-btn target="_blank" href="https://www.linkedin.com/in/luissantiagomille/" icon style="color:white">
                        <v-icon >mdi-linkedin</v-icon>
                      </v-btn>
                      <v-btn target='_blank' href="https://www.facebook.com/santiago.mille" icon style="color:white">
                        <v-icon >mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn icon target='_blank' href='https://instagram.com/santiagomille' style="color:white">
                        <v-icon >mdi-instagram</v-icon>
                      </v-btn>
                      <v-btn icon target='_blank' href='https://github.com/SantiagoMille' style="color:white">
                        <v-icon >mdi-github</v-icon>
                      </v-btn>
                      <v-btn icon target='_blank' href='mailto:santiago.mille96@gmail.com' style="color:white">
                        <v-icon >mdi-email</v-icon>
                      </v-btn>
                    </v-col>

                  </v-row>
                </v-container>
              </v-theme-provider>
            </div>
          </v-row>
        </section>

        <section style="background:#dedede" id="about-me">
          <div class="py-12"></div>

          <v-container  class="text-center less-margin">
            <h2 class="display-2 black-text font-weight-bold mb-3">ABOUT ME</h2>

            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>
              <v-divider></v-divider>
            </v-responsive>

            <v-row class='margin-about'>
              <v-col cols="12" md="4">
                <v-img class="img" 
                contain src="../../assets/mille.jpg"/>
              </v-col>
              <v-col class="black-text" cols="12" md="8">
                <h4 class='aboutMe' id='cv'>
                  Mexican, researcher, developer, cartoonfreak and CE undergrad at Tec de Monterrey, CEM.
                
                  In love with science and technology, especially bioengineering, genomics and CS. 
                  Currently working with bioprinting, biomedical engineering and microfluidic devices 
                  at <a rel="noopener noreferrer" class="link" target='_blank' href='https://shrikezhang.com'>Dr. Shrike Zhang's Laboratory</a> at Harvard.
                  I have collaborated as a research volunteer in the Nanotechnology Department at my campus where I designed microfluidic devices. I 
                  have vast experience with electrical and computational system. I participated in the 2018 iGEM competition and our team got several 
                  nominations, including best Hardware and Software. <br><br>
                  I am a brewed drinks (not coffee) and food enthusiast. Science fiction, unicorns, cartoons and ice-cream make me very happy. Always 
                  open to philosophize and share ideas. I find a unique happiness in helping people. I belive this is the only way a society 
                  can prosper and grow.<br> Co-founded <a rel="noopener noreferrer" class="link" target='_blank' href='https://unmotivomas.org'> Un Motivo Mas A.C.</a><br> <br>
                  Politics: moderate<br/>
                  Sports: soccer, basketball, football, swimming, golf and athletism. <br/>
              
                </h4>
              </v-col>
              
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12">
                <h4 class="download-resume"><a class="download-resume" href='./resume.pdf' target='_blank'>Download Resume</a></h4>                
              </v-col>
            </v-row>

            <div>
              <v-divider/>
            </div>

            <v-row class='margin black-text cv'>
              <v-col cols="12" sm='2'>
                <h2 class="titlee"> Education</h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="8">   
                <h3 class='semi-title '>B.S. Digital Systems and Robotics Engineering</h3>Instituto Tecnológico de Estudios Superiores Monterrey, CEM
              </v-col> 
              <v-col cols="12" sm="2" class="cv-text">
                <h3 class='semi-title'>Dec 2020</h3>GPA: 96%
              </v-col>
            </v-row>

            <div>
              <v-divider/>
            </div>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee">Academic</h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Harvard Medical School</h3>
                <i>Bioengineering Research Intern</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">I work in a multidisciplinary <b>tissue engineering</b> team developing hardware and software to build novel devices to help us mimicry microenvironments. This led me to publish a scientific paper.</p>
                  </li>
                  <li>
                    <p class="no-margin">I create lab-on-a-chip devices for tissue engineering research; I also implement biofabrication methods such as bioprinting to create scaffolds and other 3D structures. Currently, I have two scientific papers on review.</p>
                  </li>
                  <li>
                    <p class="no-margin">Other tasks: basic CFD simulations on Fluent/COMSOL, image processing/analysis for data extraction, cell culture.</p>
                  </li>
                  <li>
                    <p class="no-margin">Member of the lab’s safety team in charge of basic training for new members.</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>ITESM-CEM Nanotechnology Department</h3>
                <i>Bioengineering Research</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Worked on enhancing a kidney-on-a-chip’s design to better simulate diseases and test treatments. Used SolidWorks to design and Comsol Multiphysics/Ansys Fluent to simulate microfluidic dynamics. Manufactured the chip’s mold with CNC micromachining. This led me to present a poster in a scientific conference.</p>
                  </li>
                  <li>
                    <p class="no-margin">Designed an integrated lab-on-a-disc and spectrophotometer system to conduct multiple cytotoxicity assays.</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <div>
              <v-divider/>
            </div>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee">Industry</h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>duckT - Freelance</h3>
                <i>Full Stack Software Engineer - <a class='link' href='https://duckt.mx' target='_blank'>duckT.mx</a></i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">I oversaw the design and implementation of web and native applications based on the client’s needs.</p>
                  </li>
                  <li>
                    <p class="no-margin">Served as project manager of several projects, assigning tasks and deadlines; assisted to reunions with clients.</p>
                  </li>
                  <li>
                    <p class="no-margin">Biggest project: insurance broker system that suggests the best insurance based on input data.</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Enacment</h3>
                <i>Software Engineer</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Front-end and back-end developer for an Uber-like application using Node.js and Angular 5 with geolocation and real-time status for a company that offers advance toll services.</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>IBM Mexico</h3>
                <i>Software Engineer Intern</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">I developed Android applications in Java and automation services using Bluemix and cloud technologies.</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Bluemessaging Mexico</h3>
                <i>Software Engineer Intern</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Built in new features with JS and Apache Cordova such as managing e-signatures on the company’s web platform and mobile application. </p>
                  </li>
                  <li>
                    <p class="no-margin">Designed and developed chatbots for Twitter’s DM in  Python.</p>
                  </li>
                  <li>
                    <p class="no-margin">Managed and deployed functions in AWS Lambdas, AWS S3, and Linux servers </p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>E-Hawk Systems Mexico</h3>
                <i>Software Engineer Intern</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Revised and fixed code in C# for an insurance company’s desktop application.</p>
                  </li>
                  <li>
                    <p class="no-margin">Developed part of the interface for the application</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <div>
              <v-divider/>
            </div>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee">Extra</h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Un Motivo Más A.C.</h3>
                <i>Co-founder, active member, and creative director</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Founded and leaded the organization in 2014</p>
                  </li>
                  <li>
                    <p class="no-margin">Designed and developed different activities for underprivileged children (e.g. soccer tournaments, brigades, clothes collection)</p>
                  </li>
                  <li>
                    <p class="no-margin">Plan and participate in enviromental enhancement programs (i.e. reforest natural national parks)</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <div>
              <v-divider/>
            </div>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <a class="link" href="./projects"><h2 class="titlee link">Projects</h2></a>            
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>MIPS Processor</h3>
                <i>A working processor implemented with System Verilog HDL and tested in Altera’s DE2 FPGA</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Implemented a MIPS processor on Verilog and its assembler instructions </p>
                  </li>
                  <li>
                    <p class="no-margin">Loaded and tested it in an FPGA with actual HEX code</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Analog Electromyogram</h3>
                <i>Basic electromyogram made from scratch</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Designed and built the operational circuitry based on OpAmps and transistors</p>
                  </li>
                  <li>
                    <p class="no-margin">Used LabVIEW to build a portable signal/data adquisition system to display the signals on a computer</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Compiling Kernel </h3>
                <i>Compiled the Linux kernel to add new system calls</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Downloaded, modified, and compiled the Linux kernel</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Information’s Entropy Calculator</h3>
                <i>Calculates the entropy of the information in a given folder</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">An efficient program built in C that could work as a basis for compression algorithms </p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Analog AM modulator</h3>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Designed and implemented the operational circuitry to modulate and amplify both, current and voltage signals.</p>
                  </li>
                  <li>
                    <p class="no-margin">Tested the system with multiple songs and with a maximum distance of 10 meters</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Quadruped Robot</h3>
                <i>An autonomous quadruped robot capable of walking, turning and evading obstacles</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Designed and manufactured the mechanical and electrical system and programmed the robot to be autonomous. </p>
                  </li>
                  <li>
                    <p class="no-margin">Calculated the Forward and Inverse Kinematics, designed a trajectory for each leg and built a simulation program in Matlab</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Another Monkey Paradox</h3>
                <i>Mobile game for iPhone and Android devices that features an adventurous chimp throughout time and space. Available in stores</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Designed, developed and created the games theme. Programmed with Java using LibGDX and Android Studio</p>
                  </li>
                  <li>
                    <p class="no-margin">Available for Android and iOS</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Magnetic Levitator</h3>
                <i>Close-loop Magnetic Levitator made from scratch</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Designed and build the structure and the coil to fit calculations and requirements</p>
                  </li>
                  <li>
                    <p class="no-margin">Linearized the system and implemented a PD close-loop to control it</p>
                  </li>
                  <li>
                    <p class="no-margin">Implemented a RTOS using a STM32 microcontroller to check on the sensors and run the controller in differen threads</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Computer vision aided car</h3>
                <i>Autonomous car that follows an specific color ball</i>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Designed and built the car; implemented a PID controller for each wheel.</p>
                  </li>
                  <li>
                    <p class="no-margin">Implemented color segmentation and tracking algorithms on a Rapsberry Pi</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <div>
              <v-divider/>
            </div>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee">Skills</h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Programming/Scripting Languages</h3>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Java, Python and JavaScript: 2+ years</p>
                  </li>
                  <li>
                    <p class="no-margin">Matlab, C: 1+ years</p>
                  </li>
                  <li>
                    <p class="no-margin">R, PHP, Verilog: -1 Year</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Technologies</h3>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Bootstap, Node.js, Flask, ReactJS, Ionic, Angular, Vue, Cordova</p>
                  </li>
                  <li>
                    <p class="no-margin">SciPy, Anaconda, OpenCV, Android, Git, Firebase, AWS</p>
                  </li>
                  <li>
                    <p class="no-margin">SolidWorks, Fluent, Comsol, CNC, G-code </p>
                  </li>
                  <li>
                    <p class="no-margin">Raspberry, MQTT, Iot, RTOS, STM </p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

            <v-row class='margin black-text cv' >
              <v-col cols="12" sm='2'>
                <h2 class="titlee"></h2>                
              </v-col>
              <v-col class="cv-text middle" cols="12" sm="10">   
                <h3 class='semi-title '>Courses</h3>
                <ul style="background:#dedede">
                  <li>
                    <p class="no-margin">Data Structures, Algorithms, OS, Intro to ML, Statistics</p>
                  </li>
                  <li>
                    <p class="no-margin">Machine Learning in Genomics (MIT, 2019, no credits), Genomic Data Science (Coursera, John Hopkins), Bioinformatics(Coursera, UCSD)</p>
                  </li>
                </ul>
              </v-col> 
            </v-row>

          </v-container>

          <div class="py-12"></div>
        </section>
<!--
        <section
          id="features"
          class="grey lighten-3">
          <div class="py-12"></div>

          <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">VUETIFY FEATURES</h2>

            <v-responsive
              class="mx-auto mb-12"
              width="56"
            >
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col
                v-for="({ icon, title, text }, i) in []"
                :key="i"
                cols="12"
                md="4"
              >
                <v-card
                  class="py-12 px-4"
                  color="grey lighten-5"
                  flat
                >
                  <v-theme-provider dark>
                    <div>
                      <v-avatar
                        color="primary"
                        size="88"
                      >
                        <v-icon
                          large
                          v-text="icon"
                        ></v-icon>
                      </v-avatar>
                    </div>
                  </v-theme-provider>

                  <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                    v-text="title"
                  ></v-card-title>

                  <v-card-text
                    class="subtitle-1"
                    v-text="text"
                  >
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </section>

        <section id="stats">
          <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          >
            <v-container fill-height>
              <v-row class="mx-auto">
                <v-col
                  v-for="[value, title] of []"
                  :key="title"
                  cols="12"
                  md="3"
                >
                  <div class="text-center">
                    <div
                      class="display-3 font-weight-black mb-4"
                      v-text="value"
                    ></div>

                    <div
                      class="title font-weight-regular text-uppercase"
                      v-text="title"
                    ></div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </section>

        <section id="blog">
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>

            <v-responsive
              class="mx-auto mb-12"
              width="56"
            >
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-row>
              <v-col
                v-for="({ src, text, title }, i) in []"
                :key="i"
                cols="12"
                md="4"
              >
                <v-img
                  :src="src"
                  class="mb-4"
                  height="275"
                  max-width="100%"
                ></v-img>

                <h3
                  class="font-weight-black mb-4 text-uppercase"
                  v-text="title"
                ></h3>

                <div
                  class="title font-weight-light mb-5"
                  v-text="text"
                ></div>

                <v-btn
                  class="ml-n4 font-weight-black"
                  text
                >
                  Continue Reading
                </v-btn>
              </v-col>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </section>

        <v-sheet
          id="contact"
          color="#333333"
          dark
          tag="section"
          tile>
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2>

            <v-responsive
              class="mx-auto mb-12"
              width="56"
            >
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <v-theme-provider light>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    flat
                    label="Name*"
                    solo
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    flat
                    label="Email*"
                    solo
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    flat
                    label="Subject*"
                    solo
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    flat
                    label="Message*"
                    solo
                  ></v-textarea>
                </v-col>

                <v-col
                  class="mx-auto"
                  cols="auto"
                >
                  <v-btn
                    color="accent"
                    x-large
                  >
                    Submit
                  </v-btn>
                </v-col>
              </v-row>
            </v-theme-provider>
          </v-container>

          <div class="py-12"></div>
        </v-sheet>-->
      </v-content>

      <v-footer
        class="justify-center"
        color="#4C6665"
        height="100"
      >
        <div class="title font-weight-light grey--text text--lighten-1 text-center">
          &copy; {{ (new Date()).getFullYear() }} — Made with 💜 by Santiago Mille
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',

    data: () => ({
      text: 'am an engineer',
      hobbiesList: ['like solving problems','am an engineer','enjoy brewing', 'like cartoons', 'love science', 'am a developer', 'create things', 'am Mexican'],
      colorList: ['H04F06A','HFF5D73','HFFA69E','H2DE1FC','HFF7E6B', 'Hffd33c'],
      continue:true,
      color:'#04F06A',
      hobbiesListIter: 0,
      drawer:false
    
    }),
    mounted(){
      this.repeatTimeout(0);
    },
    methods:{
      repeatTimeout(prevN) {
        let num = Math.round(Math.random() * 5)
        while(prevN===num){
          num = Math.round(Math.random() * 5)
        }
        
        setTimeout(function(){
          if(this.continue){
            this.text = this.hobbiesList[this.hobbiesListIter]
            this.hobbiesListIter = (this.hobbiesListIter+1)%this.hobbiesList.length
            this.color = this.colorList[num]
            this.repeatTimeout(num)
          }
        }.bind(this),1500);
      }
    }
  }
</script>
<style scoped>
.color{
  background: #4C6665;
  min-width: 100vw;
  min-height: 130vh;
}
.H04F06A{
  color: #04F06A;
}
.HFF5D73{
  color: #FF5D73;
}

.HFFA69E{
  color: #D4C5E2;
}

.H2DE1FC{
  color: #2DE1FC;
}

.HFF7E6B{
  color: #FF7E6B;
}

.Hffd33c{
  color: #ffd33c;
}

.padding-top{
  padding-top: 100px;
  padding-bottom: 0;
  margin-bottom: -5rem; 
}

.margin-top{
  margin-top: 3rem;
}

.v-list-item{
  min-height: fit-content !important;
}

.no-margin{
  margin-bottom: 2px;
}

.aboutMe{
  align-content: center;
  text-align: justify !important;
  font-weight: 200;
}

.download-resume{
  text-decoration-line: underline;
  color: #464655;
  text-align: end;
}

.bottom{
  position:absolute;                  
  bottom:0;
}

.semi-title{
  margin-top: 5px;
  margin-left: 1px;
}

.img{
  max-width: 75%;
  max-height: 400px;
  margin: auto;
  border-radius: 30px;
}

.black-text{
  color: #464655;
}

.less-margin{
  margin: auto;
}

.link{
  text-decoration: none;
  color: #FF5D73;
  text-decoration-line: none;
}

.link-r{
  
  color: #464655;
}

.margin{
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}

.margin-about{
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.cv{
  text-align: justify;
}

@media only screen and (max-width: 800px) {
  .semi-title {
    margin-top: 3px;
    margin-left: 1px;
    font-size: 2.2vmax;
  }
  .cv-text{
    font-size: 2.2vmax;
  }
  .middle{
    padding-left: 10px;
  }
  .titlee{
    font-size: 2.5vmax;
  }
}

</style>
