-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2020 m. Lap 20 d. 17:19
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
('0a62a63dbb923f4528d73ca69069b61a2b06342f', 'Rimas', 'Rimulis', 'rimantu69@gg.ru', 'r1m0l1s', '/images/profile_samples/4.jpg', '2020-11-20 14:28:48', '2020-11-20 14:34:52', 'TRENERIS'),
('2288af2b00d856e75ae3bfbadaaa11ed323d4f19', 'Rimvydas', 'Valatka', 'rimekas@r.lt', 'rimux', 'https://cdn2.f-cdn.com/files/download/67637030/screenshot.png', '2020-11-19 14:09:18', '2020-11-19 14:40:22', 'KLIENTAS'),
('2319454c0bac085ee80771c864dde0dfde565db8', 'Petras', 'Petrowič', 'petrowizc@gmail.com', 's3cret!', '/images/profile_samples/2.jpg', '2020-11-20 14:30:14', '2020-11-20 14:34:14', 'TRENERIS'),
('79d10e0cad53f7effe472236e2ae9a05881974fe', 'Jonas', 'Jonaitis', 'juozelyzas@gmail.com', 'job!', '/images/profile_samples/9.jpg', '2020-11-19 12:58:38', '2020-11-20 14:35:12', 'KLIENTAS'),
('7dc6b37542c39af4b4e3e06f51d5aa6c9c58a944', 'Alina', 'Fiodorova', 'alionochka@yandex.ru', 'al1on0va', '/images/profile_samples/1.jpg', '2020-11-20 14:29:35', '2020-11-20 14:34:22', 'TRENERIS'),
('915afaaa026be388898704c24f5ae90a72618b7a', 'gedas', 'kekstas', 'kekstasgedas@gmail.com', 'pass123', 'https://scontent.fkun1-1.fna.fbcdn.net/v/t1.0-9/39944380_1985209388210390_4630112373020033024_o.jpg?_nc_cat=110&_nc_map=test-rt&ccb=2&_nc_sid=09cbfe&_nc_ohc=PcNXkMD-wlkAX9LnQTm&_nc_ht=scontent.fkun1-1.fna&oh=37f9dfd7cfec7c847cf62f5b356ef1d4&oe=5FDEEF5A', '2020-11-20 12:08:39', '2020-11-20 12:10:37', 'KLIENTAS'),
('b08296dbcb76c6ce90e806e80c5a5063ab822301', 'testas', 'testauskas', 'test@gmail.com', 'testas123', 'DEFAULT', '2020-11-19 17:05:59', '2020-11-19 17:05:59', 'KLIENTAS'),
('d86478c67661eee2390120b90f94821d391c771e', 'Sausainis', 'Sausainius', 'sus@gmail.com', 'as4f6a8sf4', '/images/profile_samples/6.jpg', '2020-11-20 14:28:19', '2020-11-20 14:35:04', 'TRENERIS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `vartotojas`
--
ALTER TABLE `vartotojas`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
