-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 07 avr. 2019 à 21:28
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Brunet_Lin`
--

-- --------------------------------------------------------

--
-- Structure de la table `friends`
--

DROP TABLE IF EXISTS `friends`;
CREATE TABLE IF NOT EXISTS `friends` (
  `log_user` varchar(64) NOT NULL,
  `log_friend` varchar(64) NOT NULL,
  `date_friendship` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `friends`
--

INSERT INTO `friends` (`log_user`, `log_friend`, `date_friendship`) VALUES
('toto', 'tata', '2019-02-26 11:12:44'),
('tata', 'toto', '2019-04-03 19:02:38'),
('tata', 'Spiderman', '2019-04-03 19:02:44'),
('tata', 'tatou', '2019-04-06 16:50:17'),
('tata', 'joris lecon', '2019-04-07 19:32:29');

-- --------------------------------------------------------

--
-- Structure de la table `session`
--

DROP TABLE IF EXISTS `session`;
CREATE TABLE IF NOT EXISTS `session` (
  `login` varchar(64) NOT NULL,
  `key_user` varchar(64) NOT NULL,
  `date_connexion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `root` int(11) NOT NULL,
  PRIMARY KEY (`key_user`),
  KEY `login_session` (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `session`
--

INSERT INTO `session` (`login`, `key_user`, `date_connexion`, `root`) VALUES
('joris lecon', '2Vjd0DraNwwr4pPY', '2019-04-06 20:03:07', 0),
('veyracklog', 'iPfMHJpJnMTJ1Z0t', '2019-02-26 13:57:53', 0);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `login` varchar(32) NOT NULL,
  `password` blob NOT NULL,
  `prenom` varchar(32) NOT NULL,
  `nom` varchar(32) NOT NULL,
  `mail` varchar(64) NOT NULL,
  PRIMARY KEY (`login`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`login`, `password`, `prenom`, `nom`, `mail`) VALUES
('Guillaume', 0x617a65, 'Guillaume', 'Lethug', 'guigui@lol.mdr'),
('Joris Lecon', 0x617a65, 'Joris', 'Lecon', 'jojolefou@gmail.com'),
('Spiderman', 0x6d6470, 'Peter', 'Parker', 'spider@gmail.com'),
('tata', 0x6d6470, 'second_prenom', 'second_name', 'othermail@gmail.com'),
('tatou', 0x6d6470, 'tatou', 'tati', 'mail2@gmail.com'),
('toto', 0x6d6f7464657061737365, 'first_prenom', 'first_nom', 'mail@gmail.com'),
('veyracklog', 0x6d6470, 'veyrack', 'lin', 'veymail@gmail.com');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `session`
--
ALTER TABLE `session`
  ADD CONSTRAINT `login_session` FOREIGN KEY (`login`) REFERENCES `user` (`login`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
