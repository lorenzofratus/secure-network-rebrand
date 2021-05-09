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
	},
	{
		name: 'Thin & Fat Clients',
		text: `Although the current trend is moving applications to the web, desktop applications (thin and fat clients) are still widespread, especially in business environments. For this reason, analysing the security of such software is an important task for any company that relies on them for its critical processes.\n

	The security analysis of these kinds of applications, however, presents different problems than their web and mobile counterparts, and that must be addressed with particular care. For this reason, Secure Network developed a custom methodology, based on the indications of OWASP, to ensure that even the analysis of these applications are extensive and complete.\n`,
		img: '/images/covers/services/application-security/thin-fat-client.svg',
		category_id: 'application-security',
		path: '/services/',
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
	},
	{
		name: 'External and Internal Network',
		text: `The analysis of corporate infrastructures allows to verify the effectiveness of the implemented security controls and to identify ways that a real attacker could exploit to compromise the target systems. These analyses can be performed either from inside the corporate internal network or directly from the Internet (external network)\n.

	Using professional tools and a specific methodology based on the Open Source Security Testing Methodology Manual (OSSTMM), Secure Network is able to perform a thorough analysis that can assess the individual issues based on their direct impact on your business.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/external-and-internal-network.svg',
		category_id: 'network-security',
		path: '/services/',
	},
	{
		name: 'Wireless Network & Infrastructres',
		text: `Wireless networks are widely used both in personal and in corporate environments, providing a convenient alternative to traditional wired networks, but also creating new opportunities for attackers to gain access to your internal networks. To prevent wireless networks from becoming uncontrolled entry points to internal networks and critical business systems, it’s necessary to identify and fix the security issues that can lead to their compromise.\n

	Using a tested methodology, which includes an analysis of the network’s infrastructure, targeted attack scenarios are designed to identify the existing vulnerabilities and their possible exploitation in order to compromise the network integrity. For this purpose, specialised tools are employed to get a detailed insight of the issues, which are then sorted according to their impact in order to help you fix the critical problems first.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/wireless-network-and-infrastructure.svg',
		category_id: 'network-security',
		path: '/services/',
	},
	{
		name: 'Corporate Workstation Penetration Test',
		text: `The security of a company must not only take into account the applications and the critical infrastructures, but also the tools used by its employees to handle the daily business activities: the corporate workstations. Workstations and their users are indeed one of the favourite targets for attackers who exploit people’s lack of attention the reduced security measures implemented to gain access to internal networks and steal confidential information.\n

	The workstations analysis is performed on standard systems configured for your employees, in order to determine whether it is possible to carry out real attacks on these systems or to exploit them as a bridge to more critical systems. Furthermore, the threats often do not come exclusively from the outside, but also arise within company, which must therefore protect against rogue employees who intend to steal critical information or, more generally, cause economic damage. To check the security of the company against possible internal attacks, we place ourselves in the same conditions of your employees and we use the standard workstations to perform the analysis.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/corporate-workstation-penetration-test.svg',
		category_id: 'network-security',
		path: '/services/',
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
	},
	{
		name: 'Forensics Acquisition',
		text: `According to the international best practices and current standards, the only way to analyse an evidence when the original one is not available is performing a forensic copy of sequestered storage device, which means duplicating it in a way able to preserve its integrity.\n

	“bit for bit” copy technique and hash calculation of acquired evidence must be implemented by the acquisition process in order to be considered reliable, repeatable and to guarantee the completeness of duplicattion process. Only with proper procedures and a bit for bit copy it is possible to ensure data integrity and maintaining the Chain of Custody (CoC) throughout the whole process.`,
		img:
			'/images/covers/services/digital-forensics/forensics-acquisition.svg',
		category_id: 'digital-forensics',
		path: '/services/',
	},
	{
		name: 'Device Analysis',
		text: `The experience gained through the years contributed building the needed know-how to successfully manage digital investigation activity on the most common device. We are specialized on mobile forensics, a branch of digital forensics encompassing acquisition and analysis of mobile devices.`,
		img:
			'/images/covers/services/digital-forensics/forensics-acquisition.svg',
		category_id: 'digital-forensics',
		path: '/services/',
	},
	{
		name: 'Malware Analysis',
		text: `Malware analysis is performed by highly skilled analysts and it is aimed to understand the malicious software logic. Acquired knowledge is then used to develop effective counter-measures, proper risk management strategies and to enhance effectiveness of IPS and antivirus software.`,
		img: '/images/covers/services/digital-forensics/malware-analysis.svg',
		category_id: 'digital-forensics',
		path: '/services/',
	},
	{
		name: 'Vulnerability Assessment',
		text: `A Vulnerability Assessment (VA) is a non-intrusive approach used to produce a prioritized list of security vulnerabilities, based on the risk associated to their potential exploitation.`,
		img:
			'/images/covers/services/security-assessments/vulnerability-assessment.svg',
		category_id: 'security-assessment',
		path: '/services/',
	},
	{
		name: 'Penetration Test',
		text: `A Penetration Test (PT) uses an intrusive and vertical approach to demonstrate how damaging security vulnerabilities could be in a real attack. It is an intensive service, as opposed to the vulnerability assessment that is an extensive one.`,
		img:
			'/images/covers/services/security-assessments/penetration-test.svg',
		category_id: 'security-assessment',
		path: '/services/',
	},
	{
		name: 'Mobile Application Security Crash Course',
		text: `Mobile Application Security Crash Course is the ideal course for people with coding experience in the mobile applications field (developers and designers) that want to explore the security features of such world. The course is designed in a way that no prior knowledge of ICT Security is required, addressing each topic in clear and very comprehensible way.`,
		img:
			'/images/covers/services/application-security/web-applications-and-web-services.svg',
		category_id: 'mobile-security-training',
		path: '/services/',
	},
	{
		name: 'Mobile Security & Mobile Device Management',
		text: `The course will address the security issues related to mobile apps development and mobile devices environment. Starting from an overview of the security features currently implemented by Android and iOS platforms to guarantee the security of data, applications and device, the course will discuss in details such topics from both the point of view of attacker and developer.\n
		The course will follow the guidelines provided by OWASP (OWASP Top 10 Mobile Risks and OWASP Mobile Testing Guide) to discuss the most critical points likely to introduce vulnerabilities and current techniques to avoid them. Mobile malware topic is then addressed to explain its impact on device environment, applications and the device itself.`,
		img:
			'/images/covers/services/application-security/web-applications-and-web-services.svg',
		category_id: 'mobile-security-training',
		path: '/services/',
	},
	{
		name: 'Reverse Engineering',
		text: `The course builds a strong foundation for reverse-engineering software using a variety of system and network monitoring utilities, a disassembler, a debugger and other tools for turning software inside-out. You also learn how to understand key characteristics of malware discovered during the examination.`,
		img: '/images/covers/services/',
		category_id: 'binary-exploitation-training',
		path: '/services/',
	},
	{
		name: 'Vulnerability Detection & Exploitation',
		text: `The course will teach you how to apply the theory and practice of code auditing, how to dissect an application, how to discover security vulnerabilities and assess the danger each vulnerability presents. You will run vulnerability scans and observe exploits to better secure networks, servers and workstations.\n 
		This course is valuable for those involved in securing enterprise systems: network and system administrators, computer security personnel, officers with direct involvement in security and those involved in cyber security measures and implementation.`,
		img: '/images/covers/services/',
		category_id: 'binary-exploitation-training',
		path: '/services/',
	},
	{
		name: 'Application Vulnerability Assessment',
		text: `This course is designed to train participants to perform threat and vulnerability assessment, understanding the fundamental technical skills required to identify and prevent application vulnerabilities.\n 
		You will also discuss about methods to support secure software development. This course is useful for security personnel and others who may be responsible for assessing and managing the risk of threats to process facilities.`,
		img: '/images/covers/services/',
		category_id: 'binary-exploitation-training',
		path: '/services/',
	},
	{
		name: 'Network Vulnerability Assessment',
		text: `The course will teach you how to apply the theory and practice of code auditing, how to dissect an application, how to discover security vulnerabilities and assess the danger each vulnerability presents.\n 
		You will run vulnerability scans and observe exploits to better secure networks, servers and workstations. This course is valuable for those involved in securing enterprise systems: network and system administrators, computer security personnel, officers with direct involvement in security and those involved in cyber security measures and implementation.`,
		img: '/images/covers/services/',
		category_id: 'web-exploitation-training',
		path: '/services/',
	},
	{
		name: 'Network Penetration Testing',
		text: `The course will teach you proper planning, scoping and recon, and then dive deep into scanning, target exploitation, password attacks, and wireless with detailed hands-on exercises and practical tips for doing the job safely and effectively.\n 
		You will finish up with an intensive, hands-on exercise in which you will conduct a penetration test against a sample target organization, demonstrating the knowledge you mastered in this course.`,
		img: '/images/covers/services/',
		category_id: 'web-exploitation-training',
		path: '/services/',
	},
	{
		name: 'Web Application Testion',
		text: `The course is designed as a full hands-on challenge, in which attendees should play a real-world scenario, attacking real-world targets and breach the security of a series of web applications.\n 
		Participants will learn proper practice-oriented method to attack web applications, how to define and organize a targeted mission and learn how to solve pentesters’ issues during the hack of computer systems.`,
		img: '/images/covers/services/',
		category_id: 'web-exploitation-training',
		path: '/services/',
	},
].sort(compareByName)

let ppl = [
	{
		name: 'Alberto',
		surname: 'Volpatto',
		img: '/images/team/alberto-volpatto.jpeg',
		path: '/people/',
		role: 'manager',
		text: `Alberto Volpatto holds a M.Sc. in Computer Engineering from Politecnico di Milano, from where he graduated with a master thesis focused on the application of artificial intelligence and multiagent systems techniques to Intrusion Detection Systems (IDS).\n		
		After graduation, he started working at the ICT Department of Politecnico di Milano as a computer security researcher, where he worked on the security of mobile touchscreen devices, malware analysis, source code reviewing and development of secure software.\n
		Alberto is a Secure Network’s CTO and daily performs penetration testing on critical banking systems.`,
	},
	{
		name: 'Alex',
		surname: 'Conti',
		img: '/images/team/alex-conti-stock.jpg',
		path: '/people/',
		role: 'employee',
		text: `Alex is about to graduate in Physics at Università degli Studi di Milano. Thanks to courses he attended during his career he learned more about new programming languages. He experienced computer security for the first time by attending for pleasure professor Zanero’s course “Computer Security”.\n
		Enthusiast of robotics and Artificial Intelligence he stepped in Computer Science by building and programming robots. Among the platforms used are BasicStamp BS2 (upgraded by himself to BS2sx), Arduino Uno and Lego Mindstorm NXT.`,
	},
	{
		name: 'Eros',
		surname: 'Lever',
		img: '/images/team/eros-lever.jpeg',
		path: '/people/',
		role: 'employee',
		text: `Eros holds a M.Sc. degree from the Politecnico di Milano university. He graduated with a thesis on the realisation of a novel automated analysis framework for mobile applications targeting the Android platform, exploiting techniques such as bytecode analysis and manipulation and automated instrumentation.\n
		Among his tasks, he performs penetration testing and code review targeting both mobile devices and web application security. Eros has a strong interest in analysing new platforms and developing automated tools to optimise the analysis process.`,
	},
].sort(compareByName)

/*Refined definition */
refine(sv_categories)
export const service_categories = sv_categories

refine(svs)
export const services = svs

refinePeople(ppl)
export const people = ppl
