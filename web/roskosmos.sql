-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2020 m. Lap 20 d. 21:40
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `roskosmos`
--

-- --------------------------------------------------------

--
-- Sukurta duomenų struktūra lentelei `trenerio_vertinimai`
--

CREATE TABLE `trenerio_vertinimai` (
  `fk_vertintojo_id` varchar(255) NOT NULL,
  `fk_trenerio_id` varchar(255) NOT NULL,
  `ivertinimas` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Sukurta duomenų kopija lentelei `trenerio_vertinimai`
--

INSERT INTO `trenerio_vertinimai` (`fk_vertintojo_id`, `fk_trenerio_id`, `ivertinimas`) VALUES
('79d10e0cad53f7effe472236e2ae9a05881974fe', '658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 4),
('915afaaa026be388898704c24f5ae90a72618b7a', '2319454c0bac085ee80771c864dde0dfde565db8', 3),
('915afaaa026be388898704c24f5ae90a72618b7a', '658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 1),
('b08296dbcb76c6ce90e806e80c5a5063ab822301', '2319454c0bac085ee80771c864dde0dfde565db8', 5);

-- --------------------------------------------------------

--
-- Sukurta duomenų struktūra lentelei `treneris`
--

CREATE TABLE `treneris` (
  `fk_trenerio_id` varchar(255) NOT NULL,
  `kaina` double DEFAULT -1,
  `aprasymas` text DEFAULT NULL,
  `moto` text DEFAULT NULL,
  `vertinimas` double DEFAULT -1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Sukurta duomenų kopija lentelei `treneris`
--

INSERT INTO `treneris` (`fk_trenerio_id`, `kaina`, `aprasymas`, `moto`, `vertinimas`) VALUES
('19e0753f8488c1403558c63767cb59f4bdf7a73a', 9.69, 'Sportininkė nuo 2016 metų', 'Nėra nieko, kas tave stabdytų, išskyrus tave patį', 1),
('2319454c0bac085ee80771c864dde0dfde565db8', 2.5, 'Pats geriausias treneris ever', 'Nemažink savo tikslų, didink pastangas', 4.5),
('658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 10.6, 'Aktyvi trenerė', 'Aš trokštu pergalės todėl priimu iššūkius', 5),
('9f0002fe074eb85bdc91a1c3a419095f97d9ddd4', 50.89, 'Pasaulio čempionas', 'Juk taip smagu daryti tai, kas neįmanoma!', 3.5);

-- --------------------------------------------------------

--
-- Sukurta duomenų struktūra lentelei `vartotojas`
--

CREATE TABLE `vartotojas` (
  `id` varchar(255) NOT NULL,
  `vardas` varchar(30) NOT NULL,
  `pavarde` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `slaptazodis` varchar(50) NOT NULL,
  `profilio_foto` varchar(255) NOT NULL DEFAULT 'DEFAULT',
  `reg_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `modify_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `role` varchar(255) NOT NULL DEFAULT 'KLIENTAS'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Sukurta duomenų kopija lentelei `vartotojas`
--

INSERT INTO `vartotojas` (`id`, `vardas`, `pavarde`, `email`, `slaptazodis`, `profilio_foto`, `reg_date`, `modify_date`, `role`) VALUES
('0a62a63dbb923f4528d73ca69069b61a2b06342f', 'Rimas', 'Rimulis', 'rimantu69@gg.ru', 'r1m0l1s', '/images/profile_samples/4.jpg', '2020-11-20 14:28:48', '2020-11-20 20:30:45', 'KLIENTAS'),
('19e0753f8488c1403558c63767cb59f4bdf7a73a', 'Raminta', 'Sadauksaitė', 'raminciukas@gmail.com', 'r0mr0m', 'https://randomuser.me/api/portraits/women/59.jpg', '2020-11-20 20:29:32', '2020-11-20 20:31:29', 'TRENERIS'),
('2288af2b00d856e75ae3bfbadaaa11ed323d4f19', 'Rimvydas', 'Valatka', 'rimekas@r.lt', 'rimux', 'https://cdn2.f-cdn.com/files/download/67637030/screenshot.png', '2020-11-19 14:09:18', '2020-11-19 14:40:22', 'KLIENTAS'),
('2319454c0bac085ee80771c864dde0dfde565db8', 'Petras', 'Petrowič', 'petrowizc@gmail.com', 's3cret!', '/images/profile_samples/2.jpg', '2020-11-20 14:30:14', '2020-11-20 14:34:14', 'TRENERIS'),
('658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 'Akvilė', 'Vasiliauskaitė', 'akviliozas@g.gg', 'ak47', '/images/profile_samples/1.jpg', '2020-11-20 20:27:56', '2020-11-20 20:31:40', 'TRENERIS'),
('79d10e0cad53f7effe472236e2ae9a05881974fe', 'Jonas', 'Jonaitis', 'juozelyzas@gmail.com', 'job!', '/images/profile_samples/9.jpg', '2020-11-19 12:58:38', '2020-11-20 14:35:12', 'KLIENTAS'),
('7dc6b37542c39af4b4e3e06f51d5aa6c9c58a944', 'Alina', 'Fiodorova', 'alionochka@yandex.ru', 'al1on0va', 'DEFAULT', '2020-11-20 14:29:35', '2020-11-20 20:31:39', 'KLIENTAS'),
('915afaaa026be388898704c24f5ae90a72618b7a', 'gedas', 'kekstas', 'kekstasgedas@gmail.com', 'pass123', 'https://scontent.fkun1-1.fna.fbcdn.net/v/t1.0-9/39944380_1985209388210390_4630112373020033024_o.jpg?_nc_cat=110&_nc_map=test-rt&ccb=2&_nc_sid=09cbfe&_nc_ohc=PcNXkMD-wlkAX9LnQTm&_nc_ht=scontent.fkun1-1.fna&oh=37f9dfd7cfec7c847cf62f5b356ef1d4&oe=5FDEEF5A', '2020-11-20 12:08:39', '2020-11-20 12:10:37', 'KLIENTAS'),
('9f0002fe074eb85bdc91a1c3a419095f97d9ddd4', 'Dovydas', 'Kavaliauskas', 'dovyzas@gmail.com', 'd0v33', 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70', '2020-11-20 20:28:23', '2020-11-20 20:31:14', 'TRENERIS'),
('b08296dbcb76c6ce90e806e80c5a5063ab822301', 'testas', 'testauskas', 'test@gmail.com', 'testas123', 'DEFAULT', '2020-11-19 17:05:59', '2020-11-19 17:05:59', 'KLIENTAS'),
('d86478c67661eee2390120b90f94821d391c771e', 'Sausainis', 'Sausainius', 'sus@gmail.com', 'as4f6a8sf4', '/images/profile_samples/6.jpg', '2020-11-20 14:28:19', '2020-11-20 20:30:40', 'KLIENTAS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `trenerio_vertinimai`
--
ALTER TABLE `trenerio_vertinimai`
  ADD UNIQUE KEY `vertinimas` (`fk_vertintojo_id`,`fk_trenerio_id`);

--
-- Indexes for table `treneris`
--
ALTER TABLE `treneris`
  ADD PRIMARY KEY (`fk_trenerio_id`);

--
-- Indexes for table `vartotojas`
--
ALTER TABLE `vartotojas`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
