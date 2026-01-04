interface ArticleContent {
  title: { en: string; fr: string };
  excerpt: { en: string; fr: string };
  content: { en: string; fr: string };
  references: { title: string; url: string }[];
}

export const articleContents: Record<string, ArticleContent> = {
  'vpn-first-line-defense': {
    title: {
      en: 'VPN: Your First Line of Defense',
      fr: 'VPN : Votre Première Ligne de Défense'
    },
    excerpt: {
      en: 'Learn how VPNs encrypt your connection and why they\'re essential for privacy.',
      fr: 'Découvrez comment les VPN chiffrent votre connexion et pourquoi ils sont essentiels.'
    },
    content: {
      en: `## What is a VPN?

A **VPN (Virtual Private Network)** creates an encrypted tunnel between your device and a remote server. All your internet traffic passes through this tunnel, hiding your real IP address and protecting your data from prying eyes.

## Why Use a VPN?

- **Privacy**: Your ISP can't see what websites you visit
- **Security**: Protection on public Wi-Fi networks
- **Anonymity**: Websites see the VPN server's IP, not yours
- **Access**: Bypass geographic restrictions

## The Critical Importance of No-Log Policy

The most important feature when choosing a VPN is a **strict no-log policy**. This means the VPN provider:

- Does NOT record your browsing activity
- Does NOT store connection timestamps
- Does NOT keep your real IP address
- Cannot provide your data to authorities (because they don't have it)

⚠️ **Warning**: Many VPNs claim "no logs" but actually collect data. Always verify through independent audits.

## Our Recommendation: Mullvad VPN

After extensive research, we recommend **Mullvad VPN** for several reasons:

### Why Mullvad?

1. **True No-Log Policy**: Verified by independent audits
2. **Anonymous Payment**: Pay with cash or cryptocurrency
3. **No Account Required**: Use a random account number instead of email
4. **Open Source**: Their code is publicly auditable
5. **Based in Sweden**: Strong privacy laws, outside 14 Eyes for VPN data
6. **Fixed Price**: €5/month, no tricks or upsells

### How to Get Started

1. Visit [mullvad.net](https://mullvad.net)
2. Generate an account number (no email required)
3. Add time to your account
4. Download the app for your device
5. Connect and browse securely

## VPNs to Avoid

Some VPNs should be avoided due to privacy concerns:

- **Free VPNs**: If it's free, you're the product
- **VPNs based in 14 Eyes countries**: Potential data sharing
- **VPNs with unclear ownership**: Who actually controls your data?

## Conclusion

A VPN is an essential tool for online privacy, but choosing the right one matters. Mullvad stands out for its commitment to anonymity and transparency.`,
      fr: `## Qu'est-ce qu'un VPN ?

Un **VPN (Virtual Private Network)** crée un tunnel chiffré entre votre appareil et un serveur distant. Tout votre trafic internet passe par ce tunnel, cachant votre véritable adresse IP et protégeant vos données des regards indiscrets.

## Pourquoi Utiliser un VPN ?

- **Confidentialité** : Votre FAI ne peut pas voir les sites que vous visitez
- **Sécurité** : Protection sur les réseaux Wi-Fi publics
- **Anonymat** : Les sites web voient l'IP du serveur VPN, pas la vôtre
- **Accès** : Contourner les restrictions géographiques

## L'Importance Cruciale de la Politique No-Log

La caractéristique la plus importante lors du choix d'un VPN est une **politique stricte de non-journalisation (no-log)**. Cela signifie que le fournisseur VPN :

- N'enregistre PAS votre activité de navigation
- Ne stocke PAS les horodatages de connexion
- Ne conserve PAS votre véritable adresse IP
- Ne peut pas fournir vos données aux autorités (car ils ne les ont pas)

⚠️ **Attention** : De nombreux VPN prétendent "no logs" mais collectent en réalité des données. Vérifiez toujours par des audits indépendants.

## Notre Recommandation : Mullvad VPN

Après des recherches approfondies, nous recommandons **Mullvad VPN** pour plusieurs raisons :

### Pourquoi Mullvad ?

1. **Vraie Politique No-Log** : Vérifiée par des audits indépendants
2. **Paiement Anonyme** : Payez en espèces ou en cryptomonnaie
3. **Pas de Compte Requis** : Utilisez un numéro de compte aléatoire au lieu d'un email
4. **Open Source** : Leur code est auditable publiquement
5. **Basé en Suède** : Lois strictes sur la vie privée
6. **Prix Fixe** : 5€/mois, sans pièges ni ventes additionnelles

### Comment Commencer

1. Visitez [mullvad.net](https://mullvad.net)
2. Générez un numéro de compte (pas d'email requis)
3. Ajoutez du temps à votre compte
4. Téléchargez l'application pour votre appareil
5. Connectez-vous et naviguez en sécurité

## VPNs à Éviter

Certains VPN doivent être évités pour des raisons de confidentialité :

- **VPN gratuits** : Si c'est gratuit, vous êtes le produit
- **VPN basés dans les pays 14 Eyes** : Partage potentiel de données
- **VPN avec propriétaire flou** : Qui contrôle réellement vos données ?

## Conclusion

Un VPN est un outil essentiel pour la vie privée en ligne, mais choisir le bon est crucial. Mullvad se distingue par son engagement envers l'anonymat et la transparence.`
    },
    references: [
      { title: 'Mullvad VPN Official Site', url: 'https://mullvad.net' },
      { title: 'Mullvad Audit Reports', url: 'https://mullvad.net/en/blog/tag/audits' },
      { title: 'EFF: Choosing a VPN', url: 'https://ssd.eff.org/module/choosing-vpn-thats-right-you' },
      { title: 'Privacy Guides - VPN Overview', url: 'https://www.privacyguides.org/vpn/' }
    ]
  },

  'password-managers-guide': {
    title: {
      en: 'Password Managers: A Complete Guide',
      fr: 'Gestionnaires de Mots de Passe : Guide Complet'
    },
    excerpt: {
      en: 'Stop using the same password everywhere. Here\'s how to manage them securely.',
      fr: 'Arrêtez d\'utiliser le même mot de passe partout. Voici comment les gérer en sécurité.'
    },
    content: {
      en: `## The Password Problem

The average person has over **100 online accounts**. If you're using the same password (or variations) for most of them, you're one data breach away from disaster.

## Why You Need a Password Manager

A password manager is a secure vault that:

- **Generates** strong, unique passwords for every account
- **Stores** them encrypted with a master password
- **Auto-fills** login forms securely
- **Syncs** across all your devices

## Our Recommendation: Bitwarden

We strongly recommend **Bitwarden** as your password manager. Here's why:

### Why Bitwarden?

1. **Open Source**: The entire codebase is publicly available on GitHub
2. **Audited**: Regular third-party security audits
3. **Free Tier**: Fully functional free version for individuals
4. **Cross-Platform**: Works on every device and browser
5. **Self-Hostable**: You can run your own server if desired
6. **End-to-End Encrypted**: Only you can decrypt your vault

### Bitwarden vs Others

| Feature | Bitwarden | LastPass | 1Password |
|---------|-----------|----------|-----------|
| Open Source | ✅ | ❌ | ❌ |
| Free Tier | ✅ Full | Limited | ❌ |
| Self-Host | ✅ | ❌ | ❌ |
| Security Breaches | None | Multiple | None |

### Getting Started with Bitwarden

1. Visit [bitwarden.com](https://bitwarden.com)
2. Create an account with a **strong master password**
3. Install browser extensions and mobile apps
4. Import passwords from your browser
5. Start generating unique passwords for new accounts

## Creating a Strong Master Password

Your master password is the key to everything. Make it:

- **Long**: At least 16 characters
- **Memorable**: Use a passphrase like "correct-horse-battery-staple"
- **Unique**: Never use it anywhere else

### Passphrase Example

Instead of: \`P@ssw0rd123!\`

Use: \`purple-elephant-dancing-moonlight-42\`

The second is both stronger AND easier to remember.

## Additional Security Features

### Two-Factor Authentication (2FA)

Always enable 2FA on your Bitwarden account:

- Use an authenticator app (not SMS)
- Store backup codes securely
- Consider a hardware key for maximum security

### Emergency Access

Bitwarden allows you to designate trusted contacts who can access your vault in emergencies.

## Best Practices

1. **Never share passwords** via email or chat
2. **Enable 2FA** on all important accounts
3. **Regularly audit** your vault for weak passwords
4. **Use the password generator** for all new accounts
5. **Keep your master password offline** (written in a safe)

## Conclusion

A password manager is no longer optional—it's essential. Bitwarden offers the best combination of security, transparency, and usability. Start using it today.`,
      fr: `## Le Problème des Mots de Passe

La personne moyenne possède plus de **100 comptes en ligne**. Si vous utilisez le même mot de passe (ou des variations) pour la plupart, vous êtes à une fuite de données d'un désastre.

## Pourquoi Vous Avez Besoin d'un Gestionnaire

Un gestionnaire de mots de passe est un coffre-fort sécurisé qui :

- **Génère** des mots de passe forts et uniques pour chaque compte
- **Stocke** le tout chiffré avec un mot de passe maître
- **Remplit automatiquement** les formulaires de connexion
- **Synchronise** sur tous vos appareils

## Notre Recommandation : Bitwarden

Nous recommandons fortement **Bitwarden** comme gestionnaire de mots de passe. Voici pourquoi :

### Pourquoi Bitwarden ?

1. **Open Source** : Le code entier est disponible publiquement sur GitHub
2. **Audité** : Audits de sécurité tiers réguliers
3. **Gratuit** : Version gratuite entièrement fonctionnelle pour les particuliers
4. **Multi-Plateforme** : Fonctionne sur tous les appareils et navigateurs
5. **Auto-Hébergeable** : Vous pouvez faire tourner votre propre serveur
6. **Chiffrement de Bout en Bout** : Vous seul pouvez déchiffrer votre coffre

### Bitwarden vs Autres

| Fonctionnalité | Bitwarden | LastPass | 1Password |
|----------------|-----------|----------|-----------|
| Open Source | ✅ | ❌ | ❌ |
| Version Gratuite | ✅ Complète | Limitée | ❌ |
| Auto-Hébergement | ✅ | ❌ | ❌ |
| Failles de Sécurité | Aucune | Multiples | Aucune |

### Commencer avec Bitwarden

1. Visitez [bitwarden.com](https://bitwarden.com)
2. Créez un compte avec un **mot de passe maître fort**
3. Installez les extensions navigateur et apps mobiles
4. Importez les mots de passe de votre navigateur
5. Commencez à générer des mots de passe uniques

## Créer un Mot de Passe Maître Fort

Votre mot de passe maître est la clé de tout. Il doit être :

- **Long** : Au moins 16 caractères
- **Mémorable** : Utilisez une phrase secrète
- **Unique** : Ne l'utilisez jamais ailleurs

### Exemple de Phrase Secrète

Au lieu de : \`M0tDeP@sse123!\`

Utilisez : \`elephant-violet-danse-clair-lune-42\`

La seconde est à la fois plus forte ET plus facile à retenir.

## Fonctionnalités de Sécurité Avancées

### Authentification à Deux Facteurs (2FA)

Activez toujours la 2FA sur votre compte Bitwarden :

- Utilisez une app d'authentification (pas de SMS)
- Stockez les codes de secours en sécurité
- Considérez une clé matérielle pour une sécurité maximale

### Accès d'Urgence

Bitwarden vous permet de désigner des contacts de confiance qui peuvent accéder à votre coffre en cas d'urgence.

## Bonnes Pratiques

1. **Ne partagez jamais** les mots de passe par email ou chat
2. **Activez la 2FA** sur tous les comptes importants
3. **Auditez régulièrement** votre coffre pour les mots de passe faibles
4. **Utilisez le générateur** pour tous les nouveaux comptes
5. **Gardez votre mot de passe maître hors ligne** (écrit dans un coffre)

## Conclusion

Un gestionnaire de mots de passe n'est plus optionnel—c'est essentiel. Bitwarden offre la meilleure combinaison de sécurité, transparence et facilité d'utilisation. Commencez à l'utiliser dès aujourd'hui.`
    },
    references: [
      { title: 'Bitwarden Official Site', url: 'https://bitwarden.com' },
      { title: 'Bitwarden GitHub Repository', url: 'https://github.com/bitwarden' },
      { title: 'Bitwarden Security Audits', url: 'https://bitwarden.com/help/is-bitwarden-audited/' },
      { title: 'EFF: Creating Strong Passwords', url: 'https://ssd.eff.org/module/creating-strong-passwords' }
    ]
  },

  'two-factor-authentication': {
    title: {
      en: 'Two-Factor Authentication Explained',
      fr: 'L\'Authentification à Deux Facteurs Expliquée'
    },
    excerpt: {
      en: 'Add an extra layer of security to all your accounts with 2FA.',
      fr: 'Ajoutez une couche de sécurité supplémentaire à tous vos comptes avec la 2FA.'
    },
    content: {
      en: `## What is Two-Factor Authentication?

**Two-Factor Authentication (2FA)** adds a second layer of security beyond your password. Even if someone steals your password, they can't access your account without the second factor.

## The Three Types of Authentication Factors

1. **Something you know**: Password, PIN
2. **Something you have**: Phone, hardware key
3. **Something you are**: Fingerprint, face recognition

2FA combines two of these factors for enhanced security.

## Types of 2FA Methods

### 1. SMS Codes (Least Secure)

A code sent to your phone via text message.

⚠️ **Not Recommended**: Vulnerable to SIM swapping attacks.

### 2. Authenticator Apps (Recommended)

Apps that generate time-based codes (TOTP):

- **Aegis Authenticator** (Android, Open Source)
- **2FAS** (iOS/Android, Open Source)
- **Google Authenticator**
- **Microsoft Authenticator**

### 3. Hardware Security Keys (Most Secure)

Physical devices like:

- **YubiKey** (Most popular)
- **Nitrokey** (Open Source)
- **Google Titan Key**

## Our Recommendations

### For Authenticator Apps: Aegis or 2FAS

Both are **open source** and offer:

- Encrypted backups
- Biometric unlock
- Clean, simple interface
- No cloud sync (your codes stay on your device)

### For Hardware Keys: YubiKey

YubiKey offers:

- Phishing-resistant authentication
- Works with hundreds of services
- Durable and waterproof
- No batteries required

## Setting Up 2FA

1. Go to your account's security settings
2. Look for "Two-Factor Authentication" or "2FA"
3. Choose your method (authenticator app recommended)
4. Scan the QR code with your authenticator
5. **Save your backup codes** securely
6. Verify with a test code

## Essential Accounts to Protect

Priority accounts for 2FA:

1. Email (gateway to all other accounts)
2. Password manager
3. Banking and financial services
4. Social media
5. Cloud storage

## Backup Strategy

**Critical**: What happens if you lose your phone?

1. Save backup codes in your password manager
2. Set up 2FA on multiple devices if possible
3. Consider a hardware key as backup
4. Some apps allow encrypted cloud backup

## Conclusion

2FA is one of the most effective ways to protect your accounts. Start with an authenticator app, and consider upgrading to hardware keys for your most critical accounts.`,
      fr: `## Qu'est-ce que l'Authentification à Deux Facteurs ?

L'**Authentification à Deux Facteurs (2FA)** ajoute une seconde couche de sécurité au-delà de votre mot de passe. Même si quelqu'un vole votre mot de passe, il ne peut pas accéder à votre compte sans le second facteur.

## Les Trois Types de Facteurs d'Authentification

1. **Quelque chose que vous savez** : Mot de passe, PIN
2. **Quelque chose que vous avez** : Téléphone, clé matérielle
3. **Quelque chose que vous êtes** : Empreinte digitale, reconnaissance faciale

La 2FA combine deux de ces facteurs pour une sécurité renforcée.

## Types de Méthodes 2FA

### 1. Codes SMS (Moins Sécurisé)

Un code envoyé sur votre téléphone par SMS.

⚠️ **Non Recommandé** : Vulnérable aux attaques de SIM swapping.

### 2. Applications d'Authentification (Recommandé)

Applications qui génèrent des codes temporels (TOTP) :

- **Aegis Authenticator** (Android, Open Source)
- **2FAS** (iOS/Android, Open Source)
- **Google Authenticator**
- **Microsoft Authenticator**

### 3. Clés de Sécurité Matérielles (Plus Sécurisé)

Dispositifs physiques comme :

- **YubiKey** (Le plus populaire)
- **Nitrokey** (Open Source)
- **Google Titan Key**

## Nos Recommandations

### Pour les Apps d'Authentification : Aegis ou 2FAS

Les deux sont **open source** et offrent :

- Sauvegardes chiffrées
- Déverrouillage biométrique
- Interface simple et propre
- Pas de synchronisation cloud (vos codes restent sur votre appareil)

### Pour les Clés Matérielles : YubiKey

YubiKey offre :

- Authentification résistante au phishing
- Compatible avec des centaines de services
- Durable et étanche
- Pas de batterie requise

## Configurer la 2FA

1. Allez dans les paramètres de sécurité de votre compte
2. Cherchez "Authentification à Deux Facteurs" ou "2FA"
3. Choisissez votre méthode (app d'authentification recommandée)
4. Scannez le QR code avec votre authentificateur
5. **Sauvegardez vos codes de secours** en sécurité
6. Vérifiez avec un code test

## Comptes Essentiels à Protéger

Comptes prioritaires pour la 2FA :

1. Email (passerelle vers tous les autres comptes)
2. Gestionnaire de mots de passe
3. Services bancaires et financiers
4. Réseaux sociaux
5. Stockage cloud

## Stratégie de Sauvegarde

**Critique** : Que se passe-t-il si vous perdez votre téléphone ?

1. Sauvez les codes de secours dans votre gestionnaire de mots de passe
2. Configurez la 2FA sur plusieurs appareils si possible
3. Considérez une clé matérielle comme backup
4. Certaines apps permettent une sauvegarde cloud chiffrée

## Conclusion

La 2FA est l'un des moyens les plus efficaces de protéger vos comptes. Commencez avec une app d'authentification, et envisagez de passer aux clés matérielles pour vos comptes les plus critiques.`
    },
    references: [
      { title: 'Aegis Authenticator', url: 'https://getaegis.app/' },
      { title: '2FAS Authenticator', url: 'https://2fas.com/' },
      { title: 'YubiKey Official Site', url: 'https://www.yubico.com/' },
      { title: 'NIST Guidelines on Authentication', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' }
    ]
  },

  'social-media-privacy': {
    title: {
      en: 'Social Media Privacy Settings',
      fr: 'Paramètres de Confidentialité Réseaux Sociaux'
    },
    excerpt: {
      en: 'Take control of what you share online with these essential settings.',
      fr: 'Prenez le contrôle de ce que vous partagez en ligne avec ces paramètres essentiels.'
    },
    content: {
      en: `## The Privacy Problem with Social Media

Social media platforms collect vast amounts of data about you:

- Your location history
- Your browsing habits
- Your contacts and relationships
- Your interests and political views
- Your purchasing behavior

This data is used for targeted advertising and can be shared with third parties.

## Platform-Specific Privacy Settings

### Facebook/Meta

1. **Go to Settings > Privacy**
2. Set "Who can see your posts" to "Friends"
3. Disable "Face recognition"
4. Review app permissions
5. Download your data to see what they have

**Important**: Use Facebook Container extension in Firefox to isolate tracking.

### Instagram

1. Switch to a private account
2. Disable activity status
3. Control who can tag you
4. Review story sharing settings
5. Disable "Similar Account Suggestions"

### Twitter/X

1. Protect your tweets (private account)
2. Disable "Discoverability" settings
3. Turn off personalized ads
4. Disable location tagging
5. Review connected apps

### LinkedIn

1. Control your public profile visibility
2. Disable "Profile viewing options"
3. Turn off activity broadcasts
4. Limit data sharing with partners
5. Review app permissions

## General Best Practices

### Information to Never Share

- Home address
- Phone number
- Vacation plans (burglary risk)
- Children's school names
- Financial information
- Work complaints

### Think Before You Post

Ask yourself:

1. Would I show this to my employer?
2. Would I show this to my family?
3. Does this reveal my location?
4. Could this be used against me?

## Privacy-Focused Alternatives

Consider these alternatives:

- **Mastodon** instead of Twitter
- **Signal** instead of Facebook Messenger
- **Pixelfed** instead of Instagram

## Browser Extensions for Protection

- **uBlock Origin**: Block trackers and ads
- **Privacy Badger**: Learn and block trackers
- **Facebook Container**: Isolate Facebook tracking

## Conclusion

You don't have to delete social media, but you should control it. Take 30 minutes to review your privacy settings on every platform you use.`,
      fr: `## Le Problème de Confidentialité avec les Réseaux Sociaux

Les plateformes de réseaux sociaux collectent d'énormes quantités de données sur vous :

- Votre historique de localisation
- Vos habitudes de navigation
- Vos contacts et relations
- Vos intérêts et opinions politiques
- Votre comportement d'achat

Ces données sont utilisées pour la publicité ciblée et peuvent être partagées avec des tiers.

## Paramètres de Confidentialité par Plateforme

### Facebook/Meta

1. **Allez dans Paramètres > Confidentialité**
2. Définissez "Qui peut voir vos publications" sur "Amis"
3. Désactivez "Reconnaissance faciale"
4. Vérifiez les autorisations des applications
5. Téléchargez vos données pour voir ce qu'ils ont

**Important** : Utilisez l'extension Facebook Container sur Firefox pour isoler le pistage.

### Instagram

1. Passez en compte privé
2. Désactivez le statut d'activité
3. Contrôlez qui peut vous identifier
4. Vérifiez les paramètres de partage des stories
5. Désactivez "Suggestions de comptes similaires"

### Twitter/X

1. Protégez vos tweets (compte privé)
2. Désactivez les paramètres de "Découverte"
3. Désactivez les publicités personnalisées
4. Désactivez le marquage de localisation
5. Vérifiez les applications connectées

### LinkedIn

1. Contrôlez la visibilité de votre profil public
2. Désactivez les "Options de consultation du profil"
3. Désactivez les diffusions d'activité
4. Limitez le partage de données avec les partenaires
5. Vérifiez les autorisations des applications

## Bonnes Pratiques Générales

### Informations à Ne Jamais Partager

- Adresse personnelle
- Numéro de téléphone
- Plans de vacances (risque de cambriolage)
- Noms des écoles des enfants
- Informations financières
- Plaintes sur le travail

### Réfléchissez Avant de Publier

Demandez-vous :

1. Montrerais-je ceci à mon employeur ?
2. Montrerais-je ceci à ma famille ?
3. Cela révèle-t-il ma localisation ?
4. Cela pourrait-il être utilisé contre moi ?

## Alternatives Respectueuses de la Vie Privée

Considérez ces alternatives :

- **Mastodon** au lieu de Twitter
- **Signal** au lieu de Facebook Messenger
- **Pixelfed** au lieu d'Instagram

## Extensions Navigateur pour la Protection

- **uBlock Origin** : Bloque les traqueurs et publicités
- **Privacy Badger** : Apprend et bloque les traqueurs
- **Facebook Container** : Isole le pistage Facebook

## Conclusion

Vous n'avez pas à supprimer les réseaux sociaux, mais vous devez les contrôler. Prenez 30 minutes pour revoir vos paramètres de confidentialité sur chaque plateforme que vous utilisez.`
    },
    references: [
      { title: 'EFF: Privacy on Social Networks', url: 'https://ssd.eff.org/module/protecting-yourself-social-networks' },
      { title: 'Mozilla Facebook Container', url: 'https://www.mozilla.org/firefox/facebookcontainer/' },
      { title: 'Privacy Guides - Social Networks', url: 'https://www.privacyguides.org/social-networks/' },
      { title: 'Mastodon - Decentralized Social', url: 'https://joinmastodon.org/' }
    ]
  },

  'phishing-spot-fake-emails': {
    title: {
      en: 'Phishing: How to Spot Fake Emails',
      fr: 'Phishing : Comment Repérer les Faux Emails'
    },
    excerpt: {
      en: 'Recognize and avoid phishing attempts before they compromise your data.',
      fr: 'Reconnaissez et évitez les tentatives de phishing avant qu\'elles ne compromettent vos données.'
    },
    content: {
      en: `## What is Phishing?

**Phishing** is a social engineering attack where criminals impersonate legitimate organizations to steal your:

- Login credentials
- Credit card numbers
- Personal information
- Access to your accounts

## Red Flags to Watch For

### 1. Sender Address

- Check the actual email address, not just the display name
- Look for misspellings: "amaz0n.com" vs "amazon.com"
- Beware of lookalike domains: "amazon-security.com"

### 2. Urgency and Fear Tactics

Phishing emails often claim:

- "Your account will be suspended!"
- "Unusual activity detected!"
- "Act within 24 hours!"
- "You've won a prize!"

### 3. Generic Greetings

Legitimate companies usually know your name:

- ❌ "Dear Customer"
- ❌ "Dear User"
- ✅ "Dear John Smith"

### 4. Suspicious Links

**Always hover before clicking!**

- Check where the link actually goes
- Look for HTTPS (though scammers use it too)
- When in doubt, go directly to the website

### 5. Attachments

Never open unexpected attachments, especially:

- .exe, .zip, .js files
- "Invoice" or "Receipt" from unknown senders
- Documents asking you to "Enable Macros"

## Real Examples

### The "Bank Alert" Scam

> "Your Bank of America account has been locked. Click here to verify your identity."

**Red flags**:
- Generic sender address
- Urgency tactics
- Link goes to fake site

### The "Tech Support" Scam

> "Microsoft has detected a virus on your computer. Call this number immediately."

**Red flags**:
- Microsoft doesn't send these emails
- Phone number leads to scammers
- Fear tactics

## What to Do If You Suspect Phishing

1. **Don't click any links**
2. **Don't download attachments**
3. **Report the email** (most email providers have a report button)
4. **Go directly to the real website** if you're concerned
5. **Contact the company** through official channels

## If You've Been Phished

1. **Change your password immediately**
2. **Enable 2FA** if not already active
3. **Check for unauthorized activity**
4. **Report to the affected service**
5. **Monitor your accounts** for suspicious activity

## Tools for Protection

- **Email clients**: Use Gmail, Outlook, or ProtonMail (good spam filters)
- **Browser**: Chrome and Firefox warn about known phishing sites
- **Password manager**: Won't auto-fill on fake sites

## Conclusion

Phishing attacks are becoming increasingly sophisticated. Stay vigilant, verify senders, and never click links in suspicious emails. When in doubt, go directly to the website.`,
      fr: `## Qu'est-ce que le Phishing ?

Le **Phishing** (hameçonnage) est une attaque d'ingénierie sociale où des criminels se font passer pour des organisations légitimes pour voler vos :

- Identifiants de connexion
- Numéros de carte bancaire
- Informations personnelles
- Accès à vos comptes

## Signaux d'Alerte à Surveiller

### 1. Adresse de l'Expéditeur

- Vérifiez l'adresse email réelle, pas seulement le nom affiché
- Cherchez les fautes : "amaz0n.com" vs "amazon.com"
- Méfiez-vous des domaines similaires : "amazon-security.com"

### 2. Urgence et Tactiques de Peur

Les emails de phishing prétendent souvent :

- "Votre compte sera suspendu !"
- "Activité inhabituelle détectée !"
- "Agissez dans les 24 heures !"
- "Vous avez gagné un prix !"

### 3. Salutations Génériques

Les entreprises légitimes connaissent généralement votre nom :

- ❌ "Cher Client"
- ❌ "Cher Utilisateur"
- ✅ "Cher Jean Dupont"

### 4. Liens Suspects

**Survolez toujours avant de cliquer !**

- Vérifiez où le lien mène réellement
- Cherchez le HTTPS (bien que les escrocs l'utilisent aussi)
- En cas de doute, allez directement sur le site

### 5. Pièces Jointes

N'ouvrez jamais de pièces jointes inattendues, surtout :

- Fichiers .exe, .zip, .js
- "Facture" ou "Reçu" d'expéditeurs inconnus
- Documents demandant d'"Activer les Macros"

## Exemples Réels

### L'Arnaque "Alerte Bancaire"

> "Votre compte Société Générale a été bloqué. Cliquez ici pour vérifier votre identité."

**Signaux d'alerte** :
- Adresse d'expéditeur générique
- Tactiques d'urgence
- Le lien mène à un faux site

### L'Arnaque "Support Technique"

> "Microsoft a détecté un virus sur votre ordinateur. Appelez ce numéro immédiatement."

**Signaux d'alerte** :
- Microsoft n'envoie pas ces emails
- Le numéro mène à des escrocs
- Tactiques de peur

## Que Faire si Vous Suspectez du Phishing

1. **Ne cliquez sur aucun lien**
2. **Ne téléchargez pas les pièces jointes**
3. **Signalez l'email** (la plupart des fournisseurs ont un bouton de signalement)
4. **Allez directement sur le vrai site** si vous êtes inquiet
5. **Contactez l'entreprise** via les canaux officiels

## Si Vous Avez Été Victime

1. **Changez votre mot de passe immédiatement**
2. **Activez la 2FA** si pas déjà active
3. **Vérifiez les activités non autorisées**
4. **Signalez au service concerné**
5. **Surveillez vos comptes** pour toute activité suspecte

## Outils de Protection

- **Clients email** : Utilisez Gmail, Outlook, ou ProtonMail (bons filtres anti-spam)
- **Navigateur** : Chrome et Firefox avertissent des sites de phishing connus
- **Gestionnaire de mots de passe** : Ne remplit pas automatiquement sur les faux sites

## Conclusion

Les attaques de phishing deviennent de plus en plus sophistiquées. Restez vigilant, vérifiez les expéditeurs, et ne cliquez jamais sur les liens dans les emails suspects. En cas de doute, allez directement sur le site web.`
    },
    references: [
      { title: 'Google Phishing Quiz', url: 'https://phishingquiz.withgoogle.com/' },
      { title: 'CISA - Avoid Phishing', url: 'https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks' },
      { title: 'Anti-Phishing Working Group', url: 'https://apwg.org/' },
      { title: 'Signal Spam (France)', url: 'https://www.signal-spam.fr/' }
    ]
  },

  'gdpr-know-your-rights': {
    title: {
      en: 'GDPR: Know Your Rights',
      fr: 'RGPD : Connaissez Vos Droits'
    },
    excerpt: {
      en: 'Understanding your data protection rights under European regulation.',
      fr: 'Comprendre vos droits en matière de protection des données selon le règlement européen.'
    },
    content: {
      en: `## What is GDPR?

The **General Data Protection Regulation (GDPR)** is a European Union law that gives you control over your personal data. It applies to any organization that handles data of EU residents.

## Your Rights Under GDPR

### 1. Right to Access (Article 15)

You can request a copy of all personal data a company holds about you.

**How to exercise it**:
- Send a "Subject Access Request" (SAR)
- Companies must respond within 30 days
- The service is free

### 2. Right to Rectification (Article 16)

You can request correction of inaccurate personal data.

### 3. Right to Erasure - "Right to be Forgotten" (Article 17)

You can request deletion of your data when:

- Data is no longer necessary
- You withdraw consent
- Data was unlawfully processed

**Note**: Some exceptions apply (legal obligations, public interest)

### 4. Right to Data Portability (Article 20)

You can receive your data in a machine-readable format and transfer it to another service.

### 5. Right to Object (Article 21)

You can object to:

- Direct marketing
- Processing based on legitimate interests
- Automated decision-making and profiling

### 6. Right to Restrict Processing (Article 18)

You can limit how your data is used while disputes are resolved.

## How to Make a GDPR Request

### Template for Access Request

> Dear Data Protection Officer,
>
> Under Article 15 of the GDPR, I am requesting a copy of all personal data you hold about me.
>
> My identifying information:
> - Name: [Your Name]
> - Email: [Your Email]
> - Account ID: [If applicable]
>
> Please respond within 30 days as required by law.
>
> Best regards,
> [Your Name]

## What Counts as Personal Data?

GDPR defines personal data broadly:

- Name, address, phone number
- Email addresses
- IP addresses
- Location data
- Online identifiers (cookies)
- Photos and videos
- Financial information
- Health data
- Biometric data

## Company Obligations

Companies must:

1. Have a lawful basis for processing data
2. Be transparent about data use
3. Implement security measures
4. Report data breaches within 72 hours
5. Appoint a Data Protection Officer (if required)
6. Conduct Data Protection Impact Assessments

## Penalties for Non-Compliance

GDPR violations can result in fines up to:

- **€20 million** or
- **4% of global annual revenue** (whichever is higher)

Major fines have been issued to:

- Meta: €1.2 billion
- Amazon: €746 million
- Google: €90 million

## How to File a Complaint

If a company violates your rights:

1. Contact their Data Protection Officer
2. File a complaint with your national Data Protection Authority
3. In France: CNIL (cnil.fr)
4. In Germany: State DPA offices
5. In UK: ICO (ico.org.uk)

## Conclusion

GDPR gives you powerful rights over your personal data. Don't hesitate to exercise them. Companies are legally obligated to respect your privacy.`,
      fr: `## Qu'est-ce que le RGPD ?

Le **Règlement Général sur la Protection des Données (RGPD)** est une loi de l'Union Européenne qui vous donne le contrôle sur vos données personnelles. Il s'applique à toute organisation qui traite des données de résidents de l'UE.

## Vos Droits selon le RGPD

### 1. Droit d'Accès (Article 15)

Vous pouvez demander une copie de toutes les données personnelles qu'une entreprise détient sur vous.

**Comment l'exercer** :
- Envoyez une "Demande d'Accès"
- Les entreprises doivent répondre sous 30 jours
- Le service est gratuit

### 2. Droit de Rectification (Article 16)

Vous pouvez demander la correction de données personnelles inexactes.

### 3. Droit à l'Effacement - "Droit à l'Oubli" (Article 17)

Vous pouvez demander la suppression de vos données quand :

- Les données ne sont plus nécessaires
- Vous retirez votre consentement
- Les données ont été traitées illégalement

**Note** : Certaines exceptions s'appliquent (obligations légales, intérêt public)

### 4. Droit à la Portabilité (Article 20)

Vous pouvez recevoir vos données dans un format lisible par machine et les transférer à un autre service.

### 5. Droit d'Opposition (Article 21)

Vous pouvez vous opposer à :

- La prospection commerciale
- Le traitement basé sur les intérêts légitimes
- Les décisions automatisées et le profilage

### 6. Droit à la Limitation du Traitement (Article 18)

Vous pouvez limiter l'utilisation de vos données pendant la résolution de litiges.

## Comment Faire une Demande RGPD

### Modèle de Demande d'Accès

> Madame, Monsieur le Délégué à la Protection des Données,
>
> Conformément à l'article 15 du RGPD, je demande une copie de toutes les données personnelles que vous détenez sur moi.
>
> Mes informations d'identification :
> - Nom : [Votre Nom]
> - Email : [Votre Email]
> - Identifiant de compte : [Si applicable]
>
> Veuillez répondre dans les 30 jours comme l'exige la loi.
>
> Cordialement,
> [Votre Nom]

## Qu'est-ce qu'une Donnée Personnelle ?

Le RGPD définit les données personnelles de manière large :

- Nom, adresse, numéro de téléphone
- Adresses email
- Adresses IP
- Données de localisation
- Identifiants en ligne (cookies)
- Photos et vidéos
- Informations financières
- Données de santé
- Données biométriques

## Obligations des Entreprises

Les entreprises doivent :

1. Avoir une base légale pour traiter les données
2. Être transparentes sur l'utilisation des données
3. Mettre en œuvre des mesures de sécurité
4. Signaler les violations de données sous 72 heures
5. Nommer un Délégué à la Protection des Données (si requis)
6. Réaliser des Analyses d'Impact

## Sanctions pour Non-Conformité

Les violations du RGPD peuvent entraîner des amendes jusqu'à :

- **20 millions d'euros** ou
- **4% du chiffre d'affaires annuel mondial** (le montant le plus élevé)

Des amendes majeures ont été infligées à :

- Meta : 1,2 milliard d'euros
- Amazon : 746 millions d'euros
- Google : 90 millions d'euros

## Comment Porter Plainte

Si une entreprise viole vos droits :

1. Contactez leur Délégué à la Protection des Données
2. Déposez une plainte auprès de votre autorité nationale
3. En France : CNIL (cnil.fr)
4. En Belgique : APD (autoriteprotectiondonnees.be)
5. En Suisse : PFPDT (edoeb.admin.ch)

## Conclusion

Le RGPD vous donne des droits puissants sur vos données personnelles. N'hésitez pas à les exercer. Les entreprises sont légalement obligées de respecter votre vie privée.`
    },
    references: [
      { title: 'GDPR Official Text', url: 'https://gdpr.eu/' },
      { title: 'CNIL - French Data Authority', url: 'https://www.cnil.fr/' },
      { title: 'Your Europe - Data Protection Rights', url: 'https://europa.eu/youreurope/citizens/consumers/internet-telecoms/data-protection-online-privacy/index_en.htm' },
      { title: 'GDPR Request Template Generator', url: 'https://datarequests.org/' }
    ]
  }
};
