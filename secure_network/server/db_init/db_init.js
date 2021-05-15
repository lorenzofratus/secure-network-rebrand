/* eslint-disable camelcase */
import { compareByName } from '../utils/comparator.js'

function refine(items) {
	items.forEach((item) => {
		const id = item.name.toLowerCase()
		const regExp = /\s/g
		item.id = id.replace(regExp, '-')
		item.path = item.path + item.id
	})
}

function refineServices(items) {
	items.forEach((item) => {
		const id = item.name.toLowerCase()
		const regExp = /\s/g
		item.id = id.replace(regExp, '-')
		item.path = item.path + item.category_id + '/' + item.id
	})
}

function refinePeople(items) {
	items.forEach((item) => {
		const id = item.name.toLowerCase() + '-' + item.surname.toLowerCase()
		const regExp = /\s/g
		item.id = id.replace(regExp, '-')
		item.path = item.path + item.id
	})
}

function refineRes(items) {
	items.forEach((item) => {
		const d = new Date(item.date)
		const month = d.toLocaleString('EN', { month: 'long' }).toLowerCase()
		const day = d.getDate()
		const year = d.getFullYear()
		item.id = month + '-' + day
		item.path = item.path + year + '/' + item.id
	})
}

/* Raw variables definition */

const sv_categories = [
	{
		name: 'Application Security',
		text:
			'Applications process and handle most of a company’s information, including critical data. Custom applications have become an easy to reach and popular target for attackers.',
		img: 'smartphone',
		path: '/services/categories/',
	},
	{
		name: 'Binary Exploitation Training',
		text: 'TBD',
		img: 'memory',
		path: '/services/categories/',
	},
	{
		name: 'Digital Forensics',
		text:
			'Digital Forensics is a branch of forensic science encompassing the recovery and investigation of material found in digital devices, often in relation to computer crime.',
		img: 'search',
		path: '/services/categories/',
	},
	{
		name: 'Mobile Security Training',
		text: 'TBD',
		img: 'phonelink_lock',
		path: '/services/categories/',
	},
	{
		name: 'Network Security',
		text:
			'The security of modern companies depends on the security of their most important infrastructures, which are the bases for their systems, applications and information protection.',
		img: 'wifi',
		path: '/services/categories/',
	},
	{
		name: 'Security Assessment',
		text:
			'A security risk assessment identifies, assesses, and implements key security controls in applications. It also focuses on preventing application security defects and vulnerabilities.',
		img: 'lock',
		path: '/services/categories/',
	},
	{
		name: 'Web Exploitation Training',
		text: 'TBD',
		img: 'language',
		path: '/services/categories/',
	},
].sort(compareByName)

const svs = [
	{
		name: 'Web Applications & Web Services',
		text: `Web applications store our personal information, manage our finances, share our documents and are an integral part of our everyday life, even during work activities.\n
		Ensuring the security of these applications is essential to keep your information and services secure, minimizing the risk of cyber attacks. Security analysis is necessary even when end-users cannot directly operate on the application, like when dealing with APIs and web services.\n
		Using a methodology based on the Open Web Application Security Project (OWASP) Testing Guide, Secure Network analyses your web applications, detailing every discovered vulnerability and suggests how to resolve it. Furthermore, all detected vulnerabilities are classified using the OWASP Risk Scoring Methodology`,
		img:
			'/images/covers/services/application-security/web-applications-and-web-services.svg',
		category_id: 'application-security',
		path: '/services/categories/',
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
		path: '/services/categories/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Thin & Fat Clients',
		text: `Although the current trend is moving applications to the web, desktop applications (thin and fat clients) are still widespread, especially in business environments. For this reason, analysing the security of such software is an important task for any company that relies on them for its critical processes.\n
		The security analysis of these kinds of applications, however, presents different problems than their web and mobile counterparts, and that must be addressed with particular care. For this reason, Secure Network developed a custom methodology, based on the indications of OWASP, to ensure that even the analysis of these applications are extensive and complete.\n`,
		img: '/images/covers/services/application-security/thin-fat-client.svg',
		category_id: 'application-security',
		path: '/services/categories/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Software Licensing & Code Protection',
		text: `Although comprehensive protection against the cracking and reverse engineering of applications is impossible, the addition of a solid layer of security cen help delay the attackers and make the malicious activity economically disadvantageous.\n
		Secure Network verifies the robustness of licensing systems implemented in your applications to ensure that they are accessed only by users holding a regular license.\n
		In addition, to make sure that the application is safe at other levels, Secure Network analyzes the obfuscation and anti-debugging techniques used to protect the application source code from reverse engineering.`,
		img:
			'/images/covers/services/application-security/software-licensing-and-code-protection.svg',
		category_id: 'application-security',
		path: '/services/categories/',
		area_id: 'enterprise-security',
	},
	{
		name: 'External and Internal Network',
		text: `The analysis of corporate infrastructures allows to verify the effectiveness of the implemented security controls and to identify ways that a real attacker could exploit to compromise the target systems. These analyses can be performed either from inside the corporate internal network or directly from the Internet (external network)\n.
		Using professional tools and a specific methodology based on the Open Source Security Testing Methodology Manual (OSSTMM), Secure Network is able to perform a thorough analysis that can assess the individual issues based on their direct impact on your business.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/external-and-internal-network.svg',
		category_id: 'network-security',
		path: '/services/categories/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Wireless Network & Infrastructres',
		text: `Wireless networks are widely used both in personal and in corporate environments, providing a convenient alternative to traditional wired networks, but also creating new opportunities for attackers to gain access to your internal networks. To prevent wireless networks from becoming uncontrolled entry points to internal networks and critical business systems, it’s necessary to identify and fix the security issues that can lead to their compromise.\n
		Using a tested methodology, which includes an analysis of the network’s infrastructure, targeted attack scenarios are designed to identify the existing vulnerabilities and their possible exploitation in order to compromise the network integrity. For this purpose, specialised tools are employed to get a detailed insight of the issues, which are then sorted according to their impact in order to help you fix the critical problems first.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/wireless-network-and-infrastructure.svg',
		category_id: 'network-security',
		path: '/services/categories/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Corporate Workstation Penetration Test',
		text: `The security of a company must not only take into account the applications and the critical infrastructures, but also the tools used by its employees to handle the daily business activities: the corporate workstations. Workstations and their users are indeed one of the favourite targets for attackers who exploit people’s lack of attention the reduced security measures implemented to gain access to internal networks and steal confidential information.\n
		The workstations analysis is performed on standard systems configured for your employees, in order to determine whether it is possible to carry out real attacks on these systems or to exploit them as a bridge to more critical systems. Furthermore, the threats often do not come exclusively from the outside, but also arise within company, which must therefore protect against rogue employees who intend to steal critical information or, more generally, cause economic damage. To check the security of the company against possible internal attacks, we place ourselves in the same conditions of your employees and we use the standard workstations to perform the analysis.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/corporate-workstation-penetration-test.svg',
		category_id: 'network-security',
		path: '/services/categories/',
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
		path: '/services/categories/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Forensics Acquisition',
		text: `According to the international best practices and current standards, the only way to analyse an evidence when the original one is not available is performing a forensic copy of sequestered storage device, which means duplicating it in a way able to preserve its integrity.\n
	“Bit for bit” copy technique and hash calculation of acquired evidence must be implemented by the acquisition process in order to be considered reliable, repeatable and to guarantee the completeness of duplicattion process. Only with proper procedures and a bit for bit copy it is possible to ensure data integrity and maintaining the Chain of Custody (CoC) throughout the whole process.`,
		img:
			'/images/covers/services/digital-forensics/forensics-acquisition.svg',
		category_id: 'digital-forensics',
		path: '/services/categories/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Device Analysis',
		text: `The experience gained through the years contributed building the needed know-how to successfully manage digital investigation activity on the most common device. We are specialized on mobile forensics, a branch of digital forensics encompassing acquisition and analysis of mobile devices.`,
		img:
			'/images/covers/services/digital-forensics/forensics-acquisition.svg',
		category_id: 'digital-forensics',
		path: '/services/categories/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Malware Analysis',
		text: `Malware analysis is performed by highly skilled analysts and it is aimed to understand the malicious software logic. Acquired knowledge is then used to develop effective counter-measures, proper risk management strategies and to enhance effectiveness of IPS and antivirus software.`,
		img: '/images/covers/services/digital-forensics/malware-analysis.svg',
		category_id: 'digital-forensics',
		path: '/services/categories/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Vulnerability Assessment',
		text: `A Vulnerability Assessment (VA) is a non-intrusive approach used to produce a prioritized list of security vulnerabilities, based on the risk associated to their potential exploitation.`,
		img:
			'/images/covers/services/security-assessments/vulnerability-assessment.svg',
		category_id: 'security-assessment',
		path: '/services/categories/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Penetration Test',
		text: `A Penetration Test (PT) uses an intrusive and vertical approach to demonstrate how damaging security vulnerabilities could be in a real attack. It is an intensive service, as opposed to the vulnerability assessment that is an extensive one.`,
		img:
			'/images/covers/services/security-assessments/penetration-test.svg',
		category_id: 'security-assessment',
		path: '/services/categories/',
		area_id: 'enterprise-security',
	},
	{
		name: 'Mobile Application Security Crash Course',
		text: `Mobile Application Security Crash Course is the ideal course for people with coding experience in the mobile applications field (developers and designers) that want to explore the security features of such world. The course is designed in a way that no prior knowledge of ICT Security is required, addressing each topic in clear and very comprehensible way.`,
		img:
			'/images/covers/services/mobile-security-training/mobile-application-security-crash-course.svg',
		category_id: 'mobile-security-training',
		path: '/services/categories/',
		area_id: 'training',
	},
	{
		name: 'Mobile Security & Mobile Device Management',
		text: `The course will address the security issues related to mobile apps development and mobile devices environment. Starting from an overview of the security features currently implemented by Android and iOS platforms to guarantee the security of data, applications and device, the course will discuss in details such topics from both the point of view of attacker and developer.\n
		The course will follow the guidelines provided by OWASP (OWASP Top 10 Mobile Risks and OWASP Mobile Testing Guide) to discuss the most critical points likely to introduce vulnerabilities and current techniques to avoid them. Mobile malware topic is then addressed to explain its impact on device environment, applications and the device itself.`,
		img:
			'/images/covers/services/mobile-security-training/mobile-security-and-mobile-device-management.svg',
		category_id: 'mobile-security-training',
		path: '/services/categories/',
		area_id: 'training',
	},
	{
		name: 'Reverse Engineering',
		text: `The course builds a strong foundation for reverse-engineering software using a variety of system and network monitoring utilities, a disassembler, a debugger and other tools for turning software inside-out. You also learn how to understand key characteristics of malware discovered during the examination.`,
		img:
			'/images/covers/services/binary-exploitation-training/reverse-engineering.svg',
		category_id: 'binary-exploitation-training',
		path: '/services/categories/',
		area_id: 'training',
	},
	{
		name: 'Vulnerability Detection & Exploitation',
		text: `The course will teach you how to apply the theory and practice of code auditing, how to dissect an application, how to discover security vulnerabilities and assess the danger each vulnerability presents. You will run vulnerability scans and observe exploits to better secure networks, servers and workstations.\n 
		This course is valuable for those involved in securing enterprise systems: network and system administrators, computer security personnel, officers with direct involvement in security and those involved in cyber security measures and implementation.`,
		img:
			'/images/covers/services/binary-exploitation-training/vulnerability-detection-and-exploitation.svg',
		category_id: 'binary-exploitation-training',
		path: '/services/categories/',
		area_id: 'training',
	},
	{
		name: 'Application Vulnerability Assessment',
		text: `This course is designed to train participants to perform threat and vulnerability assessment, understanding the fundamental technical skills required to identify and prevent application vulnerabilities.\n 
		You will also discuss about methods to support secure software development. This course is useful for security personnel and others who may be responsible for assessing and managing the risk of threats to process facilities.`,
		img:
			'/images/covers/services/binary-exploitation-training/application-vulnerability-assessment.svg',
		category_id: 'binary-exploitation-training',
		path: '/services/categories/',
		area_id: 'training',
	},
	{
		name: 'Network Vulnerability Assessment',
		text: `The course will teach you how to apply the theory and practice of code auditing, how to dissect an application, how to discover security vulnerabilities and assess the danger each vulnerability presents.\n 
		You will run vulnerability scans and observe exploits to better secure networks, servers and workstations. This course is valuable for those involved in securing enterprise systems: network and system administrators, computer security personnel, officers with direct involvement in security and those involved in cyber security measures and implementation.`,
		img:
			'/images/covers/services/web-exploitation-training/network-vulnerability-assessment.svg',
		category_id: 'web-exploitation-training',
		path: '/services/categories/',
		area_id: 'training',
	},
	{
		name: 'Network Penetration Testing',
		text: `The course will teach you proper planning, scoping and recon, and then dive deep into scanning, target exploitation, password attacks, and wireless with detailed hands-on exercises and practical tips for doing the job safely and effectively.\n 
		You will finish up with an intensive, hands-on exercise in which you will conduct a penetration test against a sample target organization, demonstrating the knowledge you mastered in this course.`,
		img:
			'/images/covers/services/web-exploitation-training/network-penetration-testing.svg',
		category_id: 'web-exploitation-training',
		path: '/services/categories/',
		area_id: 'training',
	},
	{
		name: 'Web Application Testing',
		text: `The course is designed as a full hands-on challenge, in which attendees should play a real-world scenario, attacking real-world targets and breach the security of a series of web applications.\n 
		Participants will learn proper practice-oriented method to attack web applications, how to define and organize a targeted mission and learn how to solve pentesters’ issues during the hack of computer systems.`,
		img:
			'/images/covers/services/web-exploitation-training/web-application-testing.svg',
		category_id: 'web-exploitation-training',
		path: '/services/categories/',
		area_id: 'training',
	},
].sort(compareByName)

const ppl = [
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
		text: `Francesco is the Sales Manager of Secure Network: he is responsible for commercial activities and maintains partnerships in collaboration with the CEO, Alvise Biffi.\n
		Francesco holds a degree in Foreign Languages and Literature from the University of Verona and has several years of experience in the commercial field, he has experience in corporate markets (he worked the Global Account for Cerved) as well as the financial and cybersecurity software market where he used his linguistic skill to expand commercial development.`,
	},
	{
		name: 'Giancarlo',
		surname: 'Cappucci',
		img: '/images/team/giancarlo-cappucci-stock.jpg',
		path: '/team/',
		role: 'employee',
		area_id: 'enterprise-security',
		text: `ISO specialist, Giancarlo took part as a develpment team leader or member in important compliance projects (D.lgs 231/2001) and certification of management’s systems as ISO 9001 (quality), ISO 14001 (environment) and ISO 27001 (information and data security).\n
		Member of the board of directors of AICQ (Associazione Italiana Cultura della Qualità) in the public administration field, he is enrolled in AICQ SINCEV registers as a qualified auditor in ISO 9001 and ISO 27001 systems. Giancarlo promotes multiple conferences and workshops on certifications of Management Systems as useful tools to improve business performance, GDPR (General Data Protection Regulation) and Cyber Security in Smart City.`,
	},
	{
		name: 'Marcello',
		surname: 'Pogliani',
		img: '/images/team/marcello-pogliani.jpeg',
		path: '/team/',
		role: 'employee',
		area_id: 'training',
		text: `Marcello holds a M.Sc. and a Ph.D. in Computer Engineering from Politecnico di Milano, where he graduated with a doctoral dissertation focused on the security of industrial control systems for manufacturing. He co-authored 8 scientific papers and presented his research at multiple international venues, including the prestigious conference Black Hat USA twice, in 2017 and 2020.\n
		In his spare time, Marcello enjoys playing and organizing Capture the Flag competitions: since 2014, he has been a member of Politecnico’s team, Tower of Hanoi, and he took part to the DEF CON CTF 26 finals with the Italian team mHACKeroni.\n
		As a Security Engineer, Marcello routinely performs penetration testing and security assessments.`,
	},
	{
		name: 'Federico',
		surname: 'Zambito',
		img: '/images/team/federico-zambito-stock.jpg',
		path: '/team/',
		role: 'employee',
		area_id: 'enterprise-security',
		text: `Federico has performed security analyses for many public and private entities. As a Security Engineer, he now primarily performs Penetration Tests and Vulnerability Assessments.\n		
		In addition, he participates in Bug Bounty programs focusing on finding vulnerabilities in web applications. Social Engineering techniques and Adversarial Simulation fall within his principal technical interests.`,
	},
	{
		name: 'Enrico',
		surname: 'Coronese',
		img: '/images/team/enrico-coronese.jpeg',
		path: '/team/',
		role: 'employee',
		area_id: 'training',
		text: `Enrico has performed Incident Response and Incident Handling activities for important clients in the financial and space sector, both nationally and internationally.\n
		Currently, as a Security Engineer, Enrico routinely performs Penetrations Tests and Vulnerability Assessments. Code Review, Binary Analysis, Binary Exploitation and development of applications for cyber security fall among his professional and techical interests.`,
	},
	{
		name: 'Andrea',
		surname: 'Jegher',
		img: '/images/team/andrea-jegher.jpeg',
		path: '/team/',
		role: 'employee',
		area_id: 'training',
		text: `Andrea holds a Master’s Degree in Computer Science and Engineering from Politecnico di Milano, where for his thesis he designed and developed a distributed system for identifying malware within web pages. During university, he participated in CTF competitions with the “Tower of Hanoi” and “mHACKeroni” teams.\n
		As a Security Engineer, he mainly carries out penetration testing and security assessment activities. His main interests are the analysis of web platforms and software development.`,
	},
	{
		name: 'Stefano',
		surname: 'Zanero',
		img: '/images/team/stefano-zanero.jpeg',
		path: '/team/',
		role: 'founder',
		text: `Stefano Zanero is Chairman of Secure Network. Stefano received a PhD in Computer Engineering from Politecnico di Milano, where he is currently an associate professor with the Dipartimento di Elettronica, Informazione e Bioingegneria. His research focuses on mobile malware, malware analysis, and systems security. Besides teaching “Computer Security” and “Computer Forensics” at Politecnico, he has an extensive speaking and training experience in Italy and abroad. He co-authored over 50 scientific papers and books.\n
		He is an associate editor for the “Journal in computer virology and hacking techniques”. He’s a Senior Member of the IEEE (covering volunteer positions at national and regional level), the IEEE Computer Society (for which he is a member of the Board of Governors), and a lifetime senior member of the ACM. Stefano co-founded the Italian chapter of ISSA (Information System Security Association), of which he is a senior member. He sits in the International Board of Directors of the same association.`,
	},
	{
		name: 'Alvise',
		surname: 'Biffi',
		img: '/images/team/alvise-biffi.jpeg',
		path: '/team/',
		role: 'founder',
		text: `Alvise Biffi is Chief Executive Officer of Secure Network, which he founded together with Stefano Zanero in 2004. Alvise is actively in charge of business development and management.\n
		Graduated in Businees Economics from the Bocconi University of Milan, Alvise works in the IT strategic management sector since 1999. Before founding Secure Network, Alvise has been the President of JEME Bocconi and worked as Marketing Manager for SoftPeople.\n
		Since 2005, Alvise has been an active member of Assolombarda, the association of tertiary and industrial companies based in the Milan area. During the following years, he fulfilled several relevant positions. He is now the President of Piccola e Media Impresa of Assolombarda, Vice President of both Assolombarda and Piccola Industria Confindustria and council member of the Chamber of Commerce of Milan.`,
	},
].sort(compareByName)

const ars = [
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

const p_s = [
	{
		person_id: 'andrea-jegher',
		service_id: 'application-vulnerability-assessment',
		isReference: true,
	},
	{
		person_id: 'andrea-jegher',
		service_id: 'mobile-security-&-mobile-device-management',
	},
	{
		person_id: 'andrea-jegher',
		service_id: 'web-application-testing',
	},
	{
		person_id: 'diego-zaffaroni',
		service_id: 'mobile-application-security-crash-course',
	},
	{
		person_id: 'diego-zaffaroni',
		service_id: 'network-penetration-testing',
		isReference: true,
	},
	{
		person_id: 'enrico-coronese',
		service_id: 'network-vulnerability-assessment',
		isReference: true,
	},
	{
		person_id: 'enrico-coronese',
		service_id: 'reverse-engineering',
		isReference: true,
	},
	{
		person_id: 'ilaria-buonagurio',
		service_id: 'reverse-engineering',
	},
	{
		person_id: 'ilaria-buonagurio',
		service_id: 'vulnerability-detection-&-exploitation',
		isReference: true,
	},
	{
		person_id: 'ilaria-buonagurio',
		service_id: 'web-application-testing',
		isReference: true,
	},
	{
		person_id: 'riccardo-cospite',
		service_id: 'application-vulnerability-assessment',
	},
	{
		person_id: 'riccardo-cospite',
		service_id: 'mobile-application-security-crash-course',
		isReference: true,
	},
	{
		person_id: 'marcello-pogliani',
		service_id: 'application-vulnerability-assessment',
	},
	{
		person_id: 'marcello-pogliani',
		service_id: 'mobile-application-security-crash-course',
	},
	{
		person_id: 'marcello-pogliani',
		service_id: 'mobile-security-&-mobile-device-management',
		isReference: true,
	},
	{
		person_id: 'marcello-pogliani',
		service_id: 'vulnerability-detection-&-exploitation',
		isReference: true,
	},
	{
		person_id: 'alberto-volpatto',
		service_id: 'corporate-workstation-penetration-test',
		isReference: true,
	},
	{
		person_id: 'alberto-volpatto',
		service_id: 'device-analysis',
	},
	{
		person_id: 'alberto-volpatto',
		service_id: 'vulnerability-assessment',
	},
	{
		person_id: 'alberto-volpatto',
		service_id: 'external-and-internal-network',
	},
	{
		person_id: 'alex-conti',
		service_id: 'device-analysis',
		isReference: true,
	},
	{
		person_id: 'alex-conti',
		service_id: 'external-and-internal-network',
	},
	{
		person_id: 'alex-conti',
		service_id: 'forensics-acquisition',
	},
	{
		person_id: 'eros-lever',
		service_id: 'external-and-internal-network',
		isReference: true,
	},
	{
		person_id: 'eros-lever',
		service_id: 'vulnerability-assessment',
	},
	{
		person_id: 'eros-lever',
		service_id: 'forensics-acquisition',
	},
	{
		person_id: 'eros-lever',
		service_id: 'malware-analysis',
	},
	{
		person_id: 'federico-zambito',
		service_id: 'forensics-acquisition',
		isReference: true,
	},
	{
		person_id: 'federico-zambito',
		service_id: 'malware-analysis',
	},
	{
		person_id: 'federico-zambito',
		service_id: 'mobile-application',
	},
	{
		person_id: 'francesco-carbone',
		service_id: 'malware-analysis',
		isReference: true,
	},
	{
		person_id: 'francesco-carbone',
		service_id: 'mobile-application',
	},
	{
		person_id: 'francesco-carbone',
		service_id: 'penetration-test',
	},
	{
		person_id: 'giancarlo-cappucci',
		service_id: 'mobile-application',
		isReference: true,
	},
	{
		person_id: 'giancarlo-cappucci',
		service_id: 'penetration-test',
	},
	{
		person_id: 'giancarlo-cappucci',
		service_id: 'thin-&-fat-clients',
	},
	{
		person_id: 'giorgio-campiotti',
		service_id: 'penetration-test',
		isReference: true,
	},
	{
		person_id: 'giorgio-campiotti',
		service_id: 'thin-&-fat-clients',
	},
	{
		person_id: 'giorgio-campiotti',
		service_id: 'web-applications-&-web-services',
	},
	{
		person_id: 'jacopo-ferrigno',
		service_id: 'thin-&-fat-clients',
		isReference: true,
	},
	{
		person_id: 'jacopo-ferrigno',
		service_id: 'corporate-workstation-penetration-test',
	},
	{
		person_id: 'jacopo-ferrigno',
		service_id: 'web-applications-&-web-services',
	},
	{
		person_id: 'jacopo-ferrigno',
		service_id: 'software-licensing-&-code-protection',
	},
	{
		person_id: 'jacopo-ferrigno',
		service_id: 'virtual-infrastructres',
	},
	{
		person_id: 'tommaso-pescanoce',
		service_id: 'web-applications-&-web-services',
		isReference: true,
	},
	{
		person_id: 'tommaso-pescanoce',
		service_id: 'virtual-infrastructres',
		isReference: true,
	},
	{
		person_id: 'tommaso-pescanoce',
		service_id: 'device-analysis',
		isReference: true,
	},
	{
		person_id: 'tommaso-pescanoce',
		service_id: 'corporate-workstation-penetration-test',
		isReference: true,
	},
	{
		person_id: 'tommaso-pescanoce',
		service_id: 'wireless-network-&-infrastructres',
	},
	{
		person_id: 'michiele-roviello',
		service_id: 'wireless-network-&-infrastructres',
		isReference: true,
	},
	{
		person_id: 'michiele-roviello',
		service_id: 'software-licensing-&-code-protection',
		isReference: true,
	},
	{
		person_id: 'michiele-roviello',
		service_id: 'vulnerability-assessment',
		isReference: true,
	},
].sort(compareByName)

const res = [
	{
		type: 'research',
		date: '2020-05-19',
		path: '/resources/',
		icon: 'science',
		name: 'Marcello Pogliani Presents At Black Hat USA',
		text: `Marcello Pogliani, Security Engineer at Secure Network, presents a research talk at Black Hat US 2020 together with Dr. Federico Maggi from Trend Micro Research.\n
		The conference talk, “<a href="https://www.blackhat.com/us-20/briefings/schedule/index.html#otrazor-static-code-analysis-for-vulnerability-discovery-in-industrial-automation-scripts-19523">OTRazor: Static Code Analysis for Vulnerability Discovery in Industrial Automation Scripts</a>“, describes the authors’ findings about security aspects of the proprietary and domain-specific programming languages used to program the movement of industrial robots.\n
		Marcello worked on the research presented during the talk while being a Ph.D. student and collaborator of Politecnico di Milano, as part of a collaboration with Trend Micro Research.\n
		The PDF slides of the presentation can be downloaded here.`,
	},
	{
		type: 'research',
		date: '2020-05-18',
		path: '/resources/',
		icon: 'science',
		name: 'Marcello Pogliani Presents At Black Hat USA',
		text: `Marcello Pogliani, Security Engineer at Secure Network, presents a research talk at Black Hat US 2020 together with Dr. Federico Maggi from Trend Micro Research.\n
		The conference talk, “OTRazor: Static Code Analysis for Vulnerability Discovery in Industrial Automation Scripts“, describes the authors’ findings about security aspects of the proprietary and domain-specific programming languages used to program the movement of industrial robots.\n
		Marcello worked on the research presented during the talk while being a Ph.D. student and collaborator of Politecnico di Milano, as part of a collaboration with Trend Micro Research.\n
		The PDF slides of the presentation can be downloaded here.`,
	},
	{
		type: 'research',
		date: '2019-05-11',
		path: '/resources/',
		icon: 'science',
		name: 'Marcello Pogliani Presents At Black Hat USA',
		text: `Marcello Pogliani, Security Engineer at Secure Network, presents a research talk at Black Hat US 2020 together with Dr. Federico Maggi from Trend Micro Research.\n
		The conference talk, “OTRazor: Static Code Analysis for Vulnerability Discovery in Industrial Automation Scripts“, describes the authors’ findings about security aspects of the proprietary and domain-specific programming languages used to program the movement of industrial robots.\n
		Marcello worked on the research presented during the talk while being a Ph.D. student and collaborator of Politecnico di Milano, as part of a collaboration with Trend Micro Research.\n
		The PDF slides of the presentation can be downloaded here.`,
	},
	{
		type: 'research',
		date: '2019-05-12',
		path: '/resources/',
		icon: 'science',
		name: 'Marcello Pogliani Presents At Black Hat USA',
		text: `Marcello Pogliani, Security Engineer at Secure Network, presents a research talk at Black Hat US 2020 together with Dr. Federico Maggi from Trend Micro Research.\n
		The conference talk, “OTRazor: Static Code Analysis for Vulnerability Discovery in Industrial Automation Scripts“, describes the authors’ findings about security aspects of the proprietary and domain-specific programming languages used to program the movement of industrial robots.\n
		Marcello worked on the research presented during the talk while being a Ph.D. student and collaborator of Politecnico di Milano, as part of a collaboration with Trend Micro Research.\n
		The PDF slides of the presentation can be downloaded here.`,
	},
	{
		type: 'news',
		date: '2019-05-01',
		path: '/resources/',
		icon: 'feed',
		name: 'Marcello Pogliani Presents At Black Hat USA',
		text: `Marcello Pogliani, Security Engineer at Secure Network, presents a research talk at Black Hat US 2020 together with Dr. Federico Maggi from Trend Micro Research.\n
		The conference talk, “OTRazor: Static Code Analysis for Vulnerability Discovery in Industrial Automation Scripts“, describes the authors’ findings about security aspects of the proprietary and domain-specific programming languages used to program the movement of industrial robots.\n
		Marcello worked on the research presented during the talk while being a Ph.D. student and collaborator of Politecnico di Milano, as part of a collaboration with Trend Micro Research.\n
		The PDF slides of the presentation can be downloaded here.`,
	},
]

/* Refined definition */
refine(sv_categories)
export const service_categories = sv_categories

refineServices(svs)
export const services = svs

refinePeople(ppl)
export const people = ppl

refine(ars)
export const areas = ars

export const person_service = p_s

refineRes(res)
export const resources = res
