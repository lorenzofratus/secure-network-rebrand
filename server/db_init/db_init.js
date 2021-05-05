export const service_categories = [
	{
		title: 'Application Security',
		text:
			'Applications process and handle most of a company’s information, including critical data. Custom applications have become an easy to reach and popular target for attackers.',
		icon: 'smartphone',
		path: '/',
	},
	{
		title: 'Network Security',
		text:
			'The security of modern companies depends on the security of their most important infrastructures, which are the bases for their systems, applications and information protection.',
		icon: 'wifi',
		path: '/',
	},
	{
		title: 'Digital Forensics',
		text:
			'Digital Forensics is a branch of forensic science encompassing the recovery and investigation of material found in digital devices, often in relation to computer crime.',
		icon: 'search',
		path: '/',
	},
	{
		title: 'Security Assessment',
		text:
			'A security risk assessment identifies, assesses, and implements key security controls in applications. It also focuses on preventing application security defects and vulnerabilities.',
		icon: 'lock',
		path: '/',
	},
]

export const services = [
	{
		title: 'Web Applications & Web Services',
		text: `Web applications store our personal information, manage our finances, share our documents and are an integral part of our everyday life, even during work activities.

			Ensuring the security of these applications is essential to keep your information and services secure, minimizing the risk of cyber attacks. Security analysis is necessary even when end-users cannot directly operate on the application, like when dealing with APIs and web services.
			
			Using a methodology based on the Open Web Application Security Project (OWASP) Testing Guide, Secure Network analyses your web applications, detailing every discovered vulnerability and suggests how to resolve it. Furthermore, all detected vulnerabilities are classified using the OWASP Risk Scoring Methodology`,
		img:
			'/images/covers/services/application-security/web-applications-and-web-services.svg',
		category: 'Application Security',
		path: '/',
	},
	{
		title: 'Mobile Application',
		text: `Smartphones and tablets are now ubiquitous, inside they bring with them our personal information and our business documents. The extended use of these devices, in both private and business activities, has attracted the attention of attackers, lured by new opportunities for data theft.

			Secure Network provides professional Penetration Tests of the major mobile platforms: Android and iOS.
			
			Through a process analysis based on the OWASP Mobile Project methodology, Secure Network’s engineers check the security of the application. Analyses are also performed on the transmission protocols to ensure that information is safety transmitted to the back-end systems. The analysis is completed by the Penetration Test of back-end system with a methodology similar to that used for Penetration Test of Web Application and Web Services.`,
		img:
			'/images/covers/services/application-security/mobile-applications.sv',
		category: 'Application Security',
		path: '/',
	},
	{
		title: 'Thin/Fat Client',
		text: `Although the current trend is moving applications to the web, desktop applications (thin and fat clients) are still widespread, especially in business environments. For this reason, analysing the security of such software is an important task for any company that relies on them for its critical processes.

		The security analysis of these kinds of applications, however, presents different problems than their web and mobile counterparts, and that must be addressed with particular care. For this reason, Secure Network developed a custom methodology, based on the indications of OWASP, to ensure that even the analysis of these applications are extensive and complete.`,
		img: '/images/covers/services/application-security/thin-fat-client.svg',
		category: 'Application Security',
		path: '/',
	},
	{
		title: 'Software Licensing & Code Protection',
		text: `Although comprehensive protection against the cracking and reverse engineering of applications is impossible, the addition of a solid layer of security cen help delay the attackers and make the malicious activity economically disadvantageous.

		Secure Network verifies the robustness of licensing systems implemented in your applications to ensure that they are accessed only by users holding a regular license.
		
		In addition, to make sure that the application is safe at other levels, Secure Network analyzes the obfuscation and anti-debugging techniques used to protect the application source code from reverse engineering.`,
		img:
			'images/covers/services/application-security/software-licensing-and-code-protection.svg',
		category: 'Application Security',
		path: '/',
	},
	{
		title: 'External and Internal Network',
		text: `The analysis of corporate infrastructures allows to verify the effectiveness of the implemented security controls and to identify ways that a real attacker could exploit to compromise the target systems. These analyses can be performed either from inside the corporate internal network or directly from the Internet (external network).

		Using professional tools and a specific methodology based on the Open Source Security Testing Methodology Manual (OSSTMM), Secure Network is able to perform a thorough analysis that can assess the individual issues based on their direct impact on your business.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/external-and-internal-network.svg',
		category: 'Network Security',
		path: '/',
	},
	{
		title: 'Wireless Network & Infrastructres',
		text: `Wireless networks are widely used both in personal and in corporate environments, providing a convenient alternative to traditional wired networks, but also creating new opportunities for attackers to gain access to your internal networks. To prevent wireless networks from becoming uncontrolled entry points to internal networks and critical business systems, it’s necessary to identify and fix the security issues that can lead to their compromise.

		Using a tested methodology, which includes an analysis of the network’s infrastructure, targeted attack scenarios are designed to identify the existing vulnerabilities and their possible exploitation in order to compromise the network integrity. For this purpose, specialised tools are employed to get a detailed insight of the issues, which are then sorted according to their impact in order to help you fix the critical problems first.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/wireless-network-and-infrastructure.svg',
		category: 'Network Security',
		path: '/',
	},
	{
		title: 'Corporate Workstation Penetration Test',
		text: `The security of a company must not only take into account the applications and the critical infrastructures, but also the tools used by its employees to handle the daily business activities: the corporate workstations. Workstations and their users are indeed one of the favourite targets for attackers who exploit people’s lack of attention the reduced security measures implemented to gain access to internal networks and steal confidential information.

		The workstations analysis is performed on standard systems configured for your employees, in order to determine whether it is possible to carry out real attacks on these systems or to exploit them as a bridge to more critical systems. Furthermore, the threats often do not come exclusively from the outside, but also arise within company, which must therefore protect against rogue employees who intend to steal critical information or, more generally, cause economic damage. To check the security of the company against possible internal attacks, we place ourselves in the same conditions of your employees and we use the standard workstations to perform the analysis.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/corporate-workstation-penetration-test.svg',
		category: 'Network Security',
		path: '/',
	},
	{
		title: 'Virtual Infrastructres',
		text: `Thanks to their many advantages, virtual infrastructures are now widely employed in corporate environments to manage large amounts of systems, including those most critical to the business. The security of these infrastructures and their administrative networks and interfaces becomes a key element to ensure the security of corporate information and services.

		Secure Network was one of the first companies to develop in 2009 a methodology and several tools to analyse the security of virtual networks. Among these was VASTO (Virtualization Assessment Toolkit), the first toolkit for penetration testing of virtual networks, including solutions by VMware, Xen and Oracle.
		
		With a wide experience in this field, Secure Network challenges your virtual infrastructure through targeted attacks aimed at its compromise. Tests may also include the review of the infrastructure management process and of network configuration in order to identifiy further vulnerabilities.`,
		img:
			'/images/covers/services/network-and-infrastructure-security/virtual-infrastructure.svg',
		category: 'Network Security',
		path: '/',
	},
	{
		title: 'Forensics Acquisition',
		text: `According to the international best practices and current standards, the only way to analyse an evidence when the original one is not available is performing a forensic copy of sequestered storage device, which means duplicating it in a way able to preserve its integrity.

		“bit for bit” copy technique and hash calculation of acquired evidence must be implemented by the acquisition process in order to be considered reliable, repeatable and to guarantee the completeness of duplicattion process. Only with proper procedures and a bit for bit copy it is possible to ensure data integrity and maintaining the Chain of Custody (CoC) throughout the whole process.`,
		img:
			'/images/covers/services/digital-forensics/forensics-acquisition.svg',
		category: 'Digital Forensics',
		path: '/',
	},
	{
		title: 'Device Analysis',
		text: `The experience gained through the years contributed building the needed know-how to successfully manage digital investigation activity on the most common device. We are specialized on mobile forensics, a branch of digital forensics encompassing acquisition and analysis of mobile devices.`,
		img:
			'/images/covers/services/digital-forensics/forensics-acquisition.svg',
		category: 'Digital Forensics',
		path: '/',
	},
	{
		title: 'Device Analysis',
		text: `Malware analysis is performed by highly skilled analysts and it is aimed to understand the malicious software logic. Acquired knowledge is then used to develop effective counter-measures, proper risk management strategies and to enhance effectiveness of IPS and antivirus software.`,
		img: '/images/covers/services/digital-forensics/malware-analysis.svg',
		category: 'Digital Forensics',
		path: '/',
	},
	{
		title: 'Vulnerability Assessment',
		text: `A Vulnerability Assessment (VA) is a non-intrusive approach used to produce a prioritized list of security vulnerabilities, based on the risk associated to their potential exploitation.`,
		img:
			'/images/covers/services/security-assessments/vulnerability-assessment.svg',
		category: 'Security Assessment',
		path: '/',
	},
	{
		title: 'Penetration Test',
		text: `A Penetration Test (PT) uses an intrusive and vertical approach to demonstrate how damaging security vulnerabilities could be in a real attack. It is an intensive service, as opposed to the vulnerability assessment that is an extensive one.`,
		img:
			'/images/covers/services/security-assessments/penetration-test.svg',
		category: 'Security Assessment',
		path: '/',
	},
]
