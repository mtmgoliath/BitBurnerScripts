/**
 * Gain acces to all servers possible with what we got
 */
 function dukeNukeEm(targets) {

	for (var i = 0; i < targets.length; i++) {

		var root = hasRootAccess(targets[i]);
		print('Host: ' + targets[i]);
		print('Root Access: ' + root);
		if (root == false) {
			var portsRequired = getServerNumPortsRequired(targets[i]);
			switch (portsRequired) {
				case 0:
					nuke(targets[i]);
					break;
				case 1:
					if (fileExists("brutessh.exe", "home")) {
						brutessh(targets[i]);
						nuke(targets[i]);
					}
					break;
				case 2:
					if (fileExists("brutessh.exe", "home") && fileExists("ftpcrack.exe", "home")) {
						brutessh(targets[i]);
						ftpcrack(targets[i]);
						nuke(targets[i]);
					}
					break;
				case 3:
					if (fileExists("brutessh.exe", "home") && fileExists("ftpcrack.exe", "home") && fileExists("relaysmtp.exe", "home")) {
						brutessh(targets[i]);
						ftpcrack(targets[i]);
						relaysmtp(targets[i]);
						nuke(targets[i]);
					}
					break;
				case 4:
					if (fileExists("brutessh.exe", "home") && fileExists("ftpcrack.exe", "home") && fileExists("relaysmtp.exe", "home") && fileExists("httpworm.exe", "home")) {
						brutessh(targets[i]);
						ftpcrack(targets[i]);
						relaysmtp(targets[i]);
						httpworm(targets[i]);
						nuke(targets[i]);
					}
					break;
				case 5:
					if (fileExists("brutessh.exe", "home") && fileExists("ftpcrack.exe", "home") && fileExists("relaysmtp.exe", "home") && fileExists("httpworm.exe", "home") && fileExists("sqlinject.exe", "home")) {
						brutessh(targets[i]);
						ftpcrack(targets[i]);
						relaysmtp(targets[i]);
						httpworm(targets[i]);
						sqlinject(targets[i]);
						nuke(targets[i]);
					}
					break;
			}
		} 
	}

}
/**
 * All of the servers on the network
 */
var targetsArray = [
	"millenium-fitness", "alpha-ent", "rho-construction", "aevum-police", "lexo-corp",
	"aerocorp", "global-pharm", "galactic-cyber", "snap-fitness", "omnia", "unitalife", "deltaone",
	"icarus", "zeus-med", "defcomm", "univ-energy", "solaris", "infocomm", "zb-def", "taiyang-digital",
	"nova-med", "titan-labs", "run4theh111z", "microdyne", "applied-energetics", "fulcrumtech", "stormtech",
	"sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "nectar-net", "n00dles", "foodnstuff",
	"iron-gym", "max-hardware", "CSEC", "zer0", "neo-net", "omega-net", "silver-helix", "phantasy",
	"crush-fitness", "netlink", "avmnite-02h", "the-hub", "comptek", "johnson-ortho", "zb-institute",
	"syscore", "rothman-uni", "catalyst", "summit-uni", "I.I.I.I", "vitalife", "helios", "omnitek", ".",
	"4sigma", "kuai-gong", "powerhouse-fitness", "b-and-a", "blade", "nwo",
	"clarkinc", "ecorp", "megacorp", "The-Cave", "fulcrumassets"
];

/**
 * Run the function and nuke all possible targets to gain root access
 */
// disableLog(dukeNukeEm); // save some ram IRL?
dukeNukeEm(targetsArray);
