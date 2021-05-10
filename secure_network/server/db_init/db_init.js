import { compareByName } from '../utils/comparator.js'

function refine(items) {
	items.forEach((item) => {
		let id = item.name.toLowerCase()
		const regExp = /\s/g
		item.id = id.replace(regExp, '-')
		item.path = item.path + item.id
	})
}

function refinePeople(items) {
	items.forEach((item) => {
		let id = item.name.toLowerCase() + '-' + item.surname.toLowerCase()
		const regExp = /\s/g
		item.id = id.replace(regExp, '-')
		item.path = item.path + item.id
	})
}

/* Raw variables definition */

let sv_categories = [
	{
		name: 'Application Security',
		text:
			'Applications process and handle most of a company’s information, including critical data. Custom applications have become an easy to reach and popular target for attackers.',
		img: 'smartphone',
		path: '/service-categories/',
	},
	{
		name: 'Binary Exploitation Training',
		text: 'TBD',
		img: 'memory',
		path: '/service-categories/',
	},
	{
		name: 'Digital Forensics',
		text:
			'Digital Forensics is a branch of forensic science encompassing the recovery and investigation of material found in digital devices, often in relation to computer crime.',
		img: 'search',
		path: '/service-categories/',
	},
	{
		name: 'Mobile Security Training',
		text: 'TBD',
		img: 'phonelink_lock',
		path: '/service-categories/',
	},
	{
		name: 'Network Security',
		text:
			'The security of modern companies depends on the security of their most important infrastructures, which are the bases for their systems, applications and information protection.',
		img: 'wifi',
		path: '/service-categories/',
	},
	{
		name: 'Security Assessment',
		text:
			'A security risk assessment identifies, assesses, and implements key security controls in applications. It also focuses on preventing application security defects and vulnerabilities.',
		img: 'lock',
		path: '/service-categories/',
	},
	{
		name: 'Web Exploitation Training',
		text: 'TBD',
		img: 'language',
		path: '/service-categories/',
	},
].sort(compareByName)

let svs = [
	{
		name: 'Web Applications & Web Services',
		text: `Web applications store our personal information, manage our finances, share our documents and are an integral part of our everyday life, even during work activities.\n
		Ensuring the security of these applications is essential to keep your information and services secure, minimizing the risk of cyber attacks. Security analysis is necessary even when end-users cannot directly operate on the application, like when dealing with APIs and web services.\n
		Using a methodology based on the Open Web Application Security Project (OWASP) Testing Guide, Secure Network analyses your web applications, detailing every discovered vulnerability and suggests how to resolve it. Furthermore, all detected vulnerabilities are classified using the OWASP Risk Scoring Methodology`,
		img:
			'/images/covers/services/application-security/web-applications-and-web-services.svg',
		category_id: 'application-security',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Mobile Application',
		text: `Smartphones and tablets are now ubiquitous, inside they bring with them our personal information and our business documents. The extended use of these devices, in both private and business activities, has attracted the attention of attackers, lured by new opportunities for data theft.\n
		Secure Network provides professional Penetration Tests of the major mobile platforms: Android and iOS.\n
		Through a process analysis based on the OWASP Mobile Project methodology, Secure Network’s engineers check the security of the application. Analyses are also performed on the transmission protocols to ensure that information is safety transmitted to the back-end systems. The analysis is completed by the Penetration Test of back-end system with a methodology similar to that used for Penetration Test of Web Application and Web Services.`,
		img:
			'/images/covers/services/application-security/mobile-applications.svg',
		category_id: 'application-security',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Thin & Fat Clients',
		text: `Although the current trend is moving applications to the web, desktop applications (thin and fat clients) are still widespread, especially in business environments. For this reason, analysing the security of such software is an important task for any company that relies on them for its critical processes.\n
		The security analysis of these kinds of applications, however, presents different problems than their web and mobile counterparts, and that must be addressed with particular care. For this reason, Secure Network developed a custom methodology, based on the indications of OWASP, to ensure that even the analysis of these applications are extensive and complete.\n`,
		img: '/images/covers/services/application-security/thin-fat-client.svg',
		category_id: 'application-security',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Software Licensing & Code Protection',
		text: `Although comprehensive protection against the cracking and reverse engineering of applications is impossible, the addition of a solid layer of security cen help delay the attackers and make the malicious activity economically disadvantageous.\n
		Secure Network verifies the robustness of licensing systems implemented in your applications to ensure that they are accessed only by users holding a regular license.\n
		In addition, to make sure that the application is safe at other levels, Secure Network analyzes the obfuscation and anti-debugging techniques used to protect the application source code from reverse engineering.`,
		img:
			'images/covers/services/application-security/software-licensing-and-code-protection.svg',
		category_id: 'application-security',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'External and Internal Network',
		text: `The analysis of corporate infrastructures allows to verify the effectiveness of the implemented security controls and to identify ways that a real attacker could exploit to compromise the target systems. These analyses can be performed either from inside the corporate internal network or directly from the Internet (external network)\n.
		Using professional tools and a specific methodology based on the Open Source Security Testing Methodology Manual (OSSTMM), Secure Network is able to perform a thorough analysis that can assess the individual issues based on their direct impact on your business.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/external-and-internal-network.svg',
		category_id: 'network-security',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Wireless Network & Infrastructres',
		text: `Wireless networks are widely used both in personal and in corporate environments, providing a convenient alternative to traditional wired networks, but also creating new opportunities for attackers to gain access to your internal networks. To prevent wireless networks from becoming uncontrolled entry points to internal networks and critical business systems, it’s necessary to identify and fix the security issues that can lead to their compromise.\n
		Using a tested methodology, which includes an analysis of the network’s infrastructure, targeted attack scenarios are designed to identify the existing vulnerabilities and their possible exploitation in order to compromise the network integrity. For this purpose, specialised tools are employed to get a detailed insight of the issues, which are then sorted according to their impact in order to help you fix the critical problems first.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/wireless-network-and-infrastructure.svg',
		category_id: 'network-security',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Corporate Workstation Penetration Test',
		text: `The security of a company must not only take into account the applications and the critical infrastructures, but also the tools used by its employees to handle the daily business activities: the corporate workstations. Workstations and their users are indeed one of the favourite targets for attackers who exploit people’s lack of attention the reduced security measures implemented to gain access to internal networks and steal confidential information.\n
		The workstations analysis is performed on standard systems configured for your employees, in order to determine whether it is possible to carry out real attacks on these systems or to exploit them as a bridge to more critical systems. Furthermore, the threats often do not come exclusively from the outside, but also arise within company, which must therefore protect against rogue employees who intend to steal critical information or, more generally, cause economic damage. To check the security of the company against possible internal attacks, we place ourselves in the same conditions of your employees and we use the standard workstations to perform the analysis.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/corporate-workstation-penetration-test.svg',
		category_id: 'network-security',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Virtual Infrastructres',
		text: `Thanks to their many advantages, virtual infrastructures are now widely employed in corporate environments to manage large amounts of systems, including those most critical to the business. The security of these infrastructures and their administrative networks and interfaces becomes a key element to ensure the security of corporate information and services.\n
		Secure Network was one of the first companies to develop in 2009 a methodology and several tools to analyse the security of virtual networks. Among these was VASTO (Virtualization Assessment Toolkit), the first toolkit for penetration testing of virtual networks, including solutions by VMware, Xen and Oracle.\n
		With a wide experience in this field, Secure Network challenges your virtual infrastructure through targeted attacks aimed at its compromise. Tests may also include the review of the infrastructure management process and of network configuration in order to identifiy further vulnerabilities.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/virtual-infrastructure.svg',
		category_id: 'network-security',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Forensics Acquisition',
		text: `According to the international best practices and current standards, the only way to analyse an evidence when the original one is not available is performing a forensic copy of sequestered storage device, which means duplicating it in a way able to preserve its integrity.\n
	“Bit for bit” copy technique and hash calculation of acquired evidence must be implemented by the acquisition process in order to be considered reliable, repeatable and to guarantee the completeness of duplicattion process. Only with proper procedures and a bit for bit copy it is possible to ensure data integrity and maintaining the Chain of Custody (CoC) throughout the whole process.`,
		img:
			'/images/covers/services/digital-forensics/forensics-acquisition.svg',
		category_id: 'digital-forensics',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Device Analysis',
		text: `The experience gained through the years contributed building the needed know-how to successfully manage digital investigation activity on the most common device. We are specialized on mobile forensics, a branch of digital forensics encompassing acquisition and analysis of mobile devices.`,
		img:
			'/images/covers/services/digital-forensics/forensics-acquisition.svg',
		category_id: 'digital-forensics',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Malware Analysis',
		text: `Malware analysis is performed by highly skilled analysts and it is aimed to understand the malicious software logic. Acquired knowledge is then used to develop effective counter-measures, proper risk management strategies and to enhance effectiveness of IPS and antivirus software.`,
		img: '/images/covers/services/digital-forensics/malware-analysis.svg',
		category_id: 'digital-forensics',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Vulnerability Assessment',
		text: `A Vulnerability Assessment (VA) is a non-intrusive approach used to produce a prioritized list of security vulnerabilities, based on the risk associated to their potential exploitation.`,
		img:
			'/images/covers/services/security-assessments/vulnerability-assessment.svg',
		category_id: 'security-assessment',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Penetration Test',
		text: `A Penetration Test (PT) uses an intrusive and vertical approach to demonstrate how damaging security vulnerabilities could be in a real attack. It is an intensive service, as opposed to the vulnerability assessment that is an extensive one.`,
		img:
			'/images/covers/services/security-assessments/penetration-test.svg',
		category_id: 'security-assessment',
		path: '/services/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Mobile Application Security Crash Course',
		text: `Mobile Application Security Crash Course is the ideal course for people with coding experience in the mobile applications field (developers and designers) that want to explore the security features of such world. The course is designed in a way that no prior knowledge of ICT Security is required, addressing each topic in clear and very comprehensible way.`,
		img:
			'/images/covers/services/application-security/web-applications-and-web-services.svg',
		category_id: 'mobile-security-training',
		path: '/services/',
		area_id: 'training',
	},
	{
		name: 'Mobile Security & Mobile Device Management',
		text: `The course will address the security issues related to mobile apps development and mobile devices environment. Starting from an overview of the security features currently implemented by Android and iOS platforms to guarantee the security of data, applications and device, the course will discuss in details such topics from both the point of view of attacker and developer.\n
		The course will follow the guidelines provided by OWASP (OWASP Top 10 Mobile Risks and OWASP Mobile Testing Guide) to discuss the most critical points likely to introduce vulnerabilities and current techniques to avoid them. Mobile malware topic is then addressed to explain its impact on device environment, applications and the device itself.`,
		img:
			'/images/covers/services/application-security/web-applications-and-web-services.svg',
		category_id: 'mobile-security-training',
		path: '/services/',
		area_id: 'training',
	},
	{
		name: 'Reverse Engineering',
		text: `The course builds a strong foundation for reverse-engineering software using a variety of system and network monitoring utilities, a disassembler, a debugger and other tools for turning software inside-out. You also learn how to understand key characteristics of malware discovered during the examination.`,
		img: '/images/covers/services/',
		category_id: 'binary-exploitation-training',
		path: '/services/',
		area_id: 'training',
	},
	{
		name: 'Vulnerability Detection & Exploitation',
		text: `The course will teach you how to apply the theory and practice of code auditing, how to dissect an application, how to discover security vulnerabilities and assess the danger each vulnerability presents. You will run vulnerability scans and observe exploits to better secure networks, servers and workstations.\n 
		This course is valuable for those involved in securing enterprise systems: network and system administrators, computer security personnel, officers with direct involvement in security and those involved in cyber security measures and implementation.`,
		img: '/images/covers/services/',
		category_id: 'binary-exploitation-training',
		path: '/services/',
		area_id: 'training',
	},
	{
		name: 'Application Vulnerability Assessment',
		text: `This course is designed to train participants to perform threat and vulnerability assessment, understanding the fundamental technical skills required to identify and prevent application vulnerabilities.\n 
		You will also discuss about methods to support secure software development. This course is useful for security personnel and others who may be responsible for assessing and managing the risk of threats to process facilities.`,
		img: '/images/covers/services/',
		category_id: 'binary-exploitation-training',
		path: '/services/',
		area_id: 'training',
	},
	{
		name: 'Network Vulnerability Assessment',
		text: `The course will teach you how to apply the theory and practice of code auditing, how to dissect an application, how to discover security vulnerabilities and assess the danger each vulnerability presents.\n 
		You will run vulnerability scans and observe exploits to better secure networks, servers and workstations. This course is valuable for those involved in securing enterprise systems: network and system administrators, computer security personnel, officers with direct involvement in security and those involved in cyber security measures and implementation.`,
		img: '/images/covers/services/',
		category_id: 'web-exploitation-training',
		path: '/services/',
		area_id: 'training',
	},
	{
		name: 'Network Penetration Testing',
		text: `The course will teach you proper planning, scoping and recon, and then dive deep into scanning, target exploitation, password attacks, and wireless with detailed hands-on exercises and practical tips for doing the job safely and effectively.\n 
		You will finish up with an intensive, hands-on exercise in which you will conduct a penetration test against a sample target organization, demonstrating the knowledge you mastered in this course.`,
		img: '/images/covers/services/',
		category_id: 'web-exploitation-training',
		path: '/services/',
		area_id: 'training',
	},
	{
		name: 'Web Application Testion',
		text: `The course is designed as a full hands-on challenge, in which attendees should play a real-world scenario, attacking real-world targets and breach the security of a series of web applications.\n 
		Participants will learn proper practice-oriented method to attack web applications, how to define and organize a targeted mission and learn how to solve pentesters’ issues during the hack of computer systems.`,
		img: '/images/covers/services/',
		category_id: 'web-exploitation-training',
		path: '/services/',
		area_id: 'training',
	},
].sort(compareByName)

let ppl = [
	{
		name: 'Alberto',
		surname: 'Volpatto',
		img: '/images/team/alberto-volpatto.jpeg',
		path: '/team/',
		role: 'manager',
		area_id: 'enterprise-security',
		text: `Alberto Volpatto holds a M.Sc. in Computer Engineering from Politecnico di Milano, from where he graduated with a master thesis focused on the application of artificial intelligence and multiagent systems techniques to Intrusion Detection Systems (IDS).\n		
		After graduation, he started working at the ICT Department of Politecnico di Milano as a computer security researcher, where he worked on the security of mobile touchscreen devices, malware analysis, source code reviewing and development of secure software.\n
		Alberto is a Secure Network’s CTO and daily performs penetration testing on critical banking systems.`,
	},
	{
		name: 'Alex',
		surname: 'Conti',
		img: '/images/team/alex-conti-stock.jpg',
		path: '/team/',
		role: 'employee',
		area_id: 'enterprise-security',
		text: `Alex is about to graduate in Physics at Università degli Studi di Milano. Thanks to courses he attended during his career he learned more about new programming languages. He experienced computer security for the first time by attending for pleasure professor Zanero’s course “Computer Security”.\n
		Enthusiast of robotics and Artificial Intelligence he stepped in Computer Science by building and programming robots. Among the platforms used are BasicStamp BS2 (upgraded by himself to BS2sx), Arduino Uno and Lego Mindstorm NXT.`,
	},
	{
		name: 'Eros',
		surname: 'Lever',
		img: '/images/team/eros-lever.jpeg',
		path: '/team/',
		role: 'employee',
		area_id: 'enterprise-security',
		text: `Eros holds a M.Sc. degree from the Politecnico di Milano university. He graduated with a thesis on the realisation of a novel automated analysis framework for mobile applications targeting the Android platform, exploiting techniques such as bytecode analysis and manipulation and automated instrumentation.\n
		Among his tasks, he performs penetration testing and code review targeting both mobile devices and web application security. Eros has a strong interest in analysing new platforms and developing automated tools to optimise the analysis process.`,
	},
	{
		name: 'Jacopo',
		surname: 'Ferrigno',
		img: '/images/team/jacopo-ferrigno-stock.jpg',
		path: '/team/',
		role: 'employee',
		area_id: 'enterprise-security',
		text: `Jacopo holds a M.Sc. degree from Politecnico di Milano. He graduated with a thesis on binary analysis techniques based on the callgraphs. He is member of the “Tower of Hanoi” team from the Politecnico di Milano with which he participates to CTF competitions.\n
		He performs penetration test activities and reverse engineering. His interests include the security analysis of embedded devices, covering techniques for the retrieval and analysis of embedded firmwares.`,
	},
	{
		name: 'Riccardo',
		surname: 'Cospite',
		img: '/images/team/riccardo-cospite-stock.jpg',
		path: '/team/',
		role: 'manager',
		area_id: 'training',
		text: `Riccardo graduated in System and Network Information Security at the University of Milan. His thesis concerned the design and development of a command line tool that determines if specific Github software/library versions are affected by security issues.\n
		He is primarily focused on penetration tests of web and mobile applications, and his main interests are related to the automotive field of information security and latest web platforms analysis.`,
	},
	{
		name: 'Michiele',
		surname: 'Roviello',
		img: '/images/team/michele-roviello.jpeg',
		path: '/team/',
		role: 'employee',
		area_id: 'enterprise-security',
		text: `Michele received a M.Sc. in Information Security from the University of Salerno. His thesis concerned the design of new techniques for Network anomaly detection based on non-linear analysis and machine learning.\n
		He performs Penetration Testing and Digital Forensics activities. Furthermore, he had previous work experience as a member of Incident response teams. His interests include Malware Analysis, Threat Intelligence, Social Engineering and online privacy, being a supporter of the Tor Project.`,
	},
	{
		name: 'Giorgio',
		surname: 'Campiotti',
		img: '/images/team/giorgio-campiotti.jpeg',
		path: '/team/',
		role: 'employee',
		area_id: 'enterprise-security',
		text: `Specialized in embedded hardware platform development, integrated systems and IOT, Giorgio has had many professional experiences in the field of industrial electronic design, networking, system integration and system administration. He mainly executes in-depth analysis and penetration test of hardware systems and IOT devices, also in the context of Industry 4.0.\n
		His interests include hardware and IOT devices, embedded systems, RF devices for SIGINT activities, and electronic microcontrollers such as Arduino and Raspberry.`,
	},
	{
		name: 'Tommaso',
		surname: 'Pescanoce',
		img: '/images/team/tommaso-pescanoce-stock.jpg',
		path: '/team/',
		role: 'employee',
		area_id: 'enterprise-security',
		text: `Tommaso received a M.Sc. in Computer Engineering cum laude from the “Seconda Università degli Studi” of Naples. His thesis concerned the design and implementation of an open-source modular platform for cybersecurity training.\n
		He is primaly focused on penetration tests of web applications. Over the years he has worked on web applications design and development, system administration and design of virtualized infrastructures. His main interests are related to ethical hacking, electronics and high performance computing.`,
	},
	{
		name: 'Diego',
		surname: 'Zaffaroni',
		img: '/images/team/diego-zaffaroni-stock.jpg',
		path: '/team/',
		role: 'employee',
		area_id: 'training',
		text: `Diego holds a B.Sc. in computer engineering from Politecnico di Milano. He is currently a member of the italian ethical hacking team “Mhackeroni” with whom he competed in the DEFCON CTF 26 and 27 finals in Las Vegas.\n
		The main activities he deals with are mobile and application penetration tests. Reverse engineering and malware analysis are his main interests in the cybersecurity field, in particular he enjoys trying to reverse serial validation algorithms in old computer games and software.`,
	},
	{
		name: 'Ilaria',
		surname: 'Buonagurio',
		img: '/images/team/ilaria-buonagurio-stock.jpg',
		path: '/team/',
		role: 'employee',
		area_id: 'training',
		text: `Ilaria holds a Master of Science degree from Politecnico di Milano. Her thesis analyzed the correlation of genetic mutation in types of different cancers.\n
		She has a focus on web and mobile applications penetration tests. Her interests revolve around data analysis, the security of industrial networks as well as automobiles.`,
	},
	{
		name: 'Francesco',
		surname: 'Carbone',
		img: '/images/team/francesco-carbone.jpeg',
		path: '/team/',
		role: 'employee',
		area_id: 'enterprise-security',
		text: `Francesco è il Sales Manager di Secure Network: è responsabile dell’attività commerciale e segue in collaborazione con il CEO Alvise Biffi le relazioni con i Partner.\n
		Francesco ha conseguito una laurea vecchio ordinamento in Lingue e Letterature Straniere all’Università di Verona e ha un’esperienza di molti anni in ambito commerciale, sia nel mercato Corporate (è stato Global Account di Cerved) che nel mercato software per banche (pagamenti e cybersecurity), utilizzando le sue capacità linguistiche anche per lo sviluppo commerciale all’estero.`,
	},
	{
		name: 'Giancarlo',
		surname: 'Cappucci',
		img: '/images/team/giancarlo-cappucci-stock.jpg',
		path: '/team/',
		role: 'employee',
		area_id: 'enterprise-security',
		text: `Specialista ISO, Giancarlo ha partecipato a importanti progetti in ambito compliance (D.lgs 231/2001) e Certificazioni di Sistemi di Gestione quali ISO 9001 (qualità), ISO 14001 (ambiente) e ISO 27001 (sicurezza dati e informazioni) in società di servizi e sviluppo software operanti nel settore tributi e sanità.\n
		Attualmente è membro del direttivo dell’ AICQ “Associazione Italiana Cultura della Qualità” per il settore della Pubblica Amministrazione, è iscritto nei registri AICQ SINCEV come auditor qualificato nei sistemi ISO 9001 e ISO 27001. È promotore di numerose iniziative di convegni e workshop sulle tematiche relative alle certificazioni dei Sistemi di Gestione, quali strumenti utili al management per il miglioramento delle prestazioni aziendali, Privacy nuovo Codice Europeo e Cyber Security nei progetti di Smart City.`,
	},
	{
		name: 'Marcello',
		surname: 'Pogliani',
		img: '/images/team/marcello-pogliani.jpeg',
		path: '/team/',
		role: 'employee',
		area_id: 'training',
		text: `Marcello ha ottenuto il dottorato di ricerca e una laurea magistrale in ingegneria informatica presso il Politecnico di Milano, presso cui ha svolto attività di ricerca nel campo della sicurezza dei sistemi di controllo industriale in ambiente manifatturiero. E’ co-autore di 8 articoli scientifici e ha presentato la propria ricerca presso importanti eventi internazionali, inclusa la prestigiosa conferenza “Black Hat USA” nel 2017 e nel 2020.\n
		Nel tempo libero, Marcello partecipa e organizza competizioni di “capture the flag”: dal 2014 è membro del team del Politecnico, Tower of Hanoi, e ha partecipato alle finali del DEF CON CTF 26 con il team italiano mHACKeroni.\n
		Come Security Engineer, Marcello svolge principalmente attività di penetration testing e di security assessment.`,
	},
	{
		name: 'Federico',
		surname: 'Zambito',
		img: '/images/team/federico-zambito-stock.jpg',
		path: '/team/',
		role: 'employee',
		area_id: 'enterprise-security',
		text: `Federico ha svolto attività di analisi dei livelli di sicurezza delle infrastrutture e applicazioni per realtà pubbliche e private. Attualmente, come Security Engineer, si occupa principalmente di attività di Penetration testing e Vulnerability Assessment.\n		
		Inoltre, Federico partecipa a programmi di “Bug Bounty”, con particolare focus sulla ricerca di vulnerabilità in applicazioni web. Tra le sue principali aree di interesse professionale rientrano anche le tecniche di ingegneria sociale e l’Adversary Simulation.`,
	},
	{
		name: 'Enrico',
		surname: 'Coronese',
		img: '/images/team/enrico-coronese.jpeg',
		path: '/team/',
		role: 'employee',
		area_id: 'training',
		text: `Enrico ha svolto attività di Incident Response e Incident Handling per importanti clienti nell’ambito aerospaziale e finanziario, a livello nazionale e internazionale.\n
		Attualmente, come Security Engineer si occupa principalmente di Penetration Testing e Vulnerability Assessment. Tra le sue aree di interesse professionale rientrano anche lo sviluppo di applicazioni per il mondo cyber security, Code Review, Binary Analysis e Binary Exploitation.`,
	},
	{
		name: 'Andrea',
		surname: 'Jegher',
		img: '/images/team/andrea-jegher.jpeg',
		path: '/team/',
		role: 'employee',
		area_id: 'training',
		text: `Andrea ha conseguito la laurea magistrale in Computer Science and Engineering presso il Politecnico di Milano, dove per la sua tesi ha progettato e sviluppato un sistema distribuito per l’identificazione di malware all’interno di pagine web. Durante l’università ha partecipato a competizioni CTF con i team “Tower of Hanoi” e “mHACKeroni”.\n
		Come Security Engineer svolge principalmente attività di penetration testing e di security assessment. I suoi interessi principali sono l’analisi delle piattaforme web e lo sviluppo di software.`,
	},
	{
		name: 'Stefano',
		surname: 'Zanero',
		img: '/images/fake-resource.png',
		path: '/team/',
		role: 'founder',
		text: `Presidente di Secure Network, Stefano ha ricevuto, cum laude, un dottorato di ricerca in Ingegneria dell’Informazione presso il Dipartimento di Elettronica, Informazione e Bioingegneria del Politecnico di Milano, dove è attualmente professore associato. Tra i suoi interessi di ricerca figurano la virologia informatica, la sicurezza mobile, e la sicurezza dei sistemi. È professore aggregato di “Computer Security” e “Informatica Forense”. Oltre all’attività didattica presso varie strutture universitarie italiane ed estere, ha partecipato come relatore a numerosi convegni nazionali ed internazionali, ed è autore di oltre 50 articoli scientifici pubblicati su riviste e conferenze.\n
		È Associate Editor del “Journal in Computer Virology and hacking techniques”. È Senior Member dello IEEE (Institute of Electrical and Electronics Engineers), socio della IEEE Computer Society (per cui siede nella Board of Governors internazionale), e della ACM (Association for Computing Machinery), oltre ad essere socio fondatore di AIPSI (Associazione Italiana Professionisti della Sicurezza Informatica), capitolo italiano di ISSA (Information System Security Association), di cui siede nel board of directors internazionale. Giornalista pubblicista, ha ricevuto un premio per la sua attività divulgativa, in particolare per la rubrica “Diario di un Security Manager”.`,
	},
	{
		name: 'Alvise',
		surname: 'Biffi',
		img: '/images/fake-resource.png',
		path: '/team/',
		role: 'founder',
		text: `Alvise Biffi ricopre la carica di Chief Executive Officer di Secure Network, da lui fondata insieme a Stefano Zanero nel 2004. Nel suo ruolo, Biffi si occupa del business development e della gestione organizzativa.\n
		Laureato in Economia Aziendale presso l’Università Bocconi, Biffi opera nell’ambito della consulenza strategica per il settore IT dal 1999. Prima di fondare Secure Network, Biffi è stato Presidente di JEME Bocconi ed ha lavorato come Marketing Manager per SoftPeople.\n
		Dal 2005, inoltre, Alvise Biffi è entrato a fare parte in modo attivo di Assolombarda, l’associazione delle imprese industriali e del terziario dell’area milanese, ricoprendo nel corso degli anni ruoli di elevato prestigio tra cui Presidente del Gruppo Giovani Imprenditori. Oggi Biffi è Presidente della Piccola e Media Impresa di Assolombarda, Vice Presidente di Assolombarda e Vice Presidente di Piccola Industria Confindustria e dal 2012 è consigliere della Camera di Commercio di Milano`,
	},
].sort(compareByName)

let ars = [
	{
		name: 'Training',
		text: `The wide range of courses, delivered anywhere in the world, provides multiple paths that can meet the needs of all our customers, including developers and system administrators, commercial agents, security consultant, manager, law enforcement and military.\n
		Tailored to your specific technical level, the main courses will prepare you in the field of Application Security, Infrastructure Security and Secure Coding. The more advanced courses are also able to set you up to perform Penetration Test Professional.\n
		In addition to the various courses offered and already defined, Secure Network is able to understand the specific needs of its customers and develop courses that meet every need.`,
		path: '/areas/',
		img: '/images/covers/areas/training.svg',
	},
	{
		name: 'Enterprise Security',
		text: `TBD`,
		path: '/areas/',
		img: '/images/covers/areas/enterprise-security.svg',
	},
].sort(compareByName)

/*Refined definition */
refine(sv_categories)
export const service_categories = sv_categories

refine(svs)
export const services = svs

refinePeople(ppl)
export const people = ppl

refine(ars)
export const areas = ars
