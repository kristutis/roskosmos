-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2020 at 02:58 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `klientai`
--

CREATE TABLE `klientai` (
  `klientai_id` int(11) NOT NULL,
  `treneris_id` varchar(255) NOT NULL,
  `vartotojas_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `klientai`
--

INSERT INTO `klientai` (`klientai_id`, `treneris_id`, `vartotojas_id`) VALUES
(1, '9f0002fe074eb85bdc91a1c3a419095f97d9ddd4', '4f7272fe71f4c24028e2ca32d5613ec14e2df3e5'),
(2, '9f0002fe074eb85bdc91a1c3a419095f97d9ddd4', '658b91d2c7d2b3d1cdb06f7cec76852875ed02b7'),
(3, '9f0002fe074eb85bdc91a1c3a419095f97d9ddd4', '915afaaa026be388898704c24f5ae90a72618b7a'),
(4, 'aaaaaaaaaaa', '915afaaa026be388898704c24f5ae90a72618b7a');

-- --------------------------------------------------------

--
-- Table structure for table `kliento_rezervacijos`
--

CREATE TABLE `kliento_rezervacijos` (
  `fk_rezervacijos_id` int(11) NOT NULL,
  `fk_vartotojo_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kliento_rezervacijos`
--

INSERT INTO `kliento_rezervacijos` (`fk_rezervacijos_id`, `fk_vartotojo_id`) VALUES
(6, '2288af2b00d856e75ae3bfbadaaa11ed323d4f19'),
(6, '4f7272fe71f4c24028e2ca32d5613ec14e2df3e5'),
(6, '79d10e0cad53f7effe472236e2ae9a05881974fe'),
(6, 'd86478c67661eee2390120b90f94821d391c771e'),
(8, '0a62a63dbb923f4528d73ca69069b61a2b06342f'),
(9, '0a62a63dbb923f4528d73ca69069b61a2b06342f'),
(9, '2288af2b00d856e75ae3bfbadaaa11ed323d4f19'),
(13, '79d10e0cad53f7effe472236e2ae9a05881974fe'),
(160, '2288af2b00d856e75ae3bfbadaaa11ed323d4f19'),
(261, '2288af2b00d856e75ae3bfbadaaa11ed323d4f19');

-- --------------------------------------------------------

--
-- Table structure for table `klientu_kalendorius`
--

CREATE TABLE `klientu_kalendorius` (
  `kalendoriaus_id` int(11) NOT NULL,
  `treneris` varchar(255) NOT NULL,
  `klientas` varchar(255) NOT NULL,
  `programa` int(11) NOT NULL,
  `data` varchar(255) NOT NULL,
  `laikas_nuo` varchar(255) NOT NULL,
  `laikas_iki` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `naujiena`
--

CREATE TABLE `naujiena` (
  `id` int(11) NOT NULL,
  `nuotraukos_url` varchar(255) NOT NULL,
  `turinys` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `naujiena`
--

INSERT INTO `naujiena` (`id`, `nuotraukos_url`, `turinys`) VALUES
(2, 'https://clarksvillenow.sagacom.com/files/2019/02/workout-gym-exercise-equipment-shutterstock.jpg', '12-08!');

-- --------------------------------------------------------

--
-- Table structure for table `nuolaida`
--

CREATE TABLE `nuolaida` (
  `id` int(11) NOT NULL,
  `kategorija` varchar(255) NOT NULL,
  `nuolaidos_proc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nuolaida`
--

INSERT INTO `nuolaida` (`id`, `kategorija`, `nuolaidos_proc`) VALUES
(2, 'proteinas', 20);

-- --------------------------------------------------------

--
-- Table structure for table `rezervaciju_laikai`
--

CREATE TABLE `rezervaciju_laikai` (
  `id` int(11) NOT NULL,
  `laikas_nuo` varchar(255) NOT NULL,
  `laikas_iki` varchar(255) NOT NULL,
  `kuri_diena` varchar(255) NOT NULL,
  `zmoniu_skaicius` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rezervaciju_laikai`
--

INSERT INTO `rezervaciju_laikai` (`id`, `laikas_nuo`, `laikas_iki`, `kuri_diena`, `zmoniu_skaicius`) VALUES
(1, '19:00', '20:00', '2020-12-04', 15),
(2, '09:00', '10:00', '2020-12-04', 30),
(3, '10:00', '11:00', '2020-12-05', 29),
(4, '11:00', '12:00', '2020-12-05', 29),
(5, '12:00', '13:00', '2020-12-05', 29),
(6, '13:00', '14:00', '2020-12-05', 25),
(7, '14:00', '15:00', '2020-12-05', 29),
(8, '15:00', '16:00', '2020-12-05', 28),
(9, '16:00', '17:00', '2020-12-05', 27),
(10, '17:00', '18:00', '2020-12-05', 29),
(11, '10:00', '11:00', '2020-12-06', 29),
(12, '11:00', '12:00', '2020-12-06', 30),
(13, '12:00', '13:00', '2020-12-06', 28),
(14, '13:00', '14:00', '2020-12-06', 29),
(15, '08:00', '09:00', '2020-12-07', 30),
(16, '09:00', '10:00', '2020-12-07', 30),
(17, '10:00', '11:00', '2020-12-07', 29),
(18, '11:00', '12:00', '2020-12-07', 30),
(19, '12:00', '13:00', '2020-12-07', 29),
(20, '13:00', '14:00', '2020-12-07', 29),
(21, '14:00', '15:00', '2020-12-07', 30),
(22, '15:00', '16:00', '2020-12-07', 30),
(23, '16:00', '17:00', '2020-12-07', 30),
(24, '17:00', '18:00', '2020-12-07', 30),
(25, '18:00', '19:00', '2020-12-07', 30),
(26, '19:00', '20:00', '2020-12-07', 30),
(27, '08:00', '09:00', '2020-12-08', 30),
(28, '09:00', '10:00', '2020-12-08', 30),
(29, '10:00', '11:00', '2020-12-08', 30),
(30, '11:00', '12:00', '2020-12-08', 30),
(31, '12:00', '13:00', '2020-12-08', 30),
(32, '13:00', '14:00', '2020-12-08', 30),
(33, '14:00', '15:00', '2020-12-08', 30),
(34, '15:00', '16:00', '2020-12-08', 30),
(35, '16:00', '17:00', '2020-12-08', 30),
(36, '17:00', '18:00', '2020-12-08', 30),
(37, '18:00', '19:00', '2020-12-08', 30),
(38, '19:00', '20:00', '2020-12-08', 30),
(39, '08:00', '09:00', '2020-12-09', 30),
(40, '09:00', '10:00', '2020-12-09', 30),
(41, '10:00', '11:00', '2020-12-09', 30),
(42, '11:00', '12:00', '2020-12-09', 30),
(43, '12:00', '13:00', '2020-12-09', 30),
(44, '13:00', '14:00', '2020-12-09', 30),
(45, '14:00', '15:00', '2020-12-09', 30),
(46, '15:00', '16:00', '2020-12-09', 30),
(47, '16:00', '17:00', '2020-12-09', 30),
(48, '17:00', '18:00', '2020-12-09', 30),
(49, '18:00', '19:00', '2020-12-09', 30),
(50, '19:00', '20:00', '2020-12-09', 30),
(51, '08:00', '09:00', '2020-12-10', 30),
(52, '09:00', '10:00', '2020-12-10', 30),
(53, '10:00', '11:00', '2020-12-10', 30),
(54, '11:00', '12:00', '2020-12-10', 30),
(55, '12:00', '13:00', '2020-12-10', 30),
(56, '13:00', '14:00', '2020-12-10', 30),
(57, '14:00', '15:00', '2020-12-10', 30),
(58, '15:00', '16:00', '2020-12-10', 30),
(59, '16:00', '17:00', '2020-12-10', 30),
(60, '17:00', '18:00', '2020-12-10', 30),
(61, '18:00', '19:00', '2020-12-10', 30),
(62, '19:00', '20:00', '2020-12-10', 30),
(63, '08:00', '09:00', '2020-12-11', 30),
(64, '09:00', '10:00', '2020-12-11', 30),
(65, '10:00', '11:00', '2020-12-11', 30),
(66, '11:00', '12:00', '2020-12-11', 30),
(67, '12:00', '13:00', '2020-12-11', 30),
(68, '13:00', '14:00', '2020-12-11', 30),
(69, '14:00', '15:00', '2020-12-11', 30),
(70, '15:00', '16:00', '2020-12-11', 30),
(71, '16:00', '17:00', '2020-12-11', 30),
(72, '17:00', '18:00', '2020-12-11', 30),
(73, '18:00', '19:00', '2020-12-11', 30),
(74, '19:00', '20:00', '2020-12-11', 30),
(75, '09:00', '10:00', '2020-12-12', 30),
(76, '10:00', '11:00', '2020-12-12', 30),
(77, '11:00', '12:00', '2020-12-12', 30),
(78, '12:00', '13:00', '2020-12-12', 30),
(79, '13:00', '14:00', '2020-12-12', 30),
(80, '14:00', '15:00', '2020-12-12', 30),
(81, '15:00', '16:00', '2020-12-12', 30),
(82, '16:00', '17:00', '2020-12-12', 30),
(83, '17:00', '18:00', '2020-12-12', 30),
(84, '10:00', '11:00', '2020-12-13', 30),
(85, '11:00', '12:00', '2020-12-13', 30),
(86, '12:00', '13:00', '2020-12-13', 30),
(87, '13:00', '14:00', '2020-12-13', 30),
(88, '08:00', '09:00', '2020-12-14', 30),
(89, '09:00', '10:00', '2020-12-14', 0),
(90, '10:00', '11:00', '2020-12-14', 30),
(91, '11:00', '12:00', '2020-12-14', 30),
(92, '12:00', '13:00', '2020-12-14', 0),
(93, '13:00', '14:00', '2020-12-14', 30),
(94, '14:00', '15:00', '2020-12-14', 30),
(95, '15:00', '16:00', '2020-12-14', 30),
(96, '16:00', '17:00', '2020-12-14', 30),
(97, '17:00', '18:00', '2020-12-14', 30),
(98, '18:00', '19:00', '2020-12-14', 30),
(99, '19:00', '20:00', '2020-12-14', 30),
(100, '08:00', '09:00', '2020-12-15', 30),
(101, '09:00', '10:00', '2020-12-15', 30),
(102, '10:00', '11:00', '2020-12-15', 30),
(103, '11:00', '12:00', '2020-12-15', 30),
(104, '12:00', '13:00', '2020-12-15', 30),
(105, '13:00', '14:00', '2020-12-15', 29),
(106, '14:00', '15:00', '2020-12-15', 29),
(107, '15:00', '16:00', '2020-12-15', 30),
(108, '16:00', '17:00', '2020-12-15', 30),
(109, '17:00', '18:00', '2020-12-15', 30),
(110, '18:00', '19:00', '2020-12-15', 30),
(111, '19:00', '20:00', '2020-12-15', 30),
(112, '08:00', '09:00', '2020-12-16', 30),
(113, '09:00', '10:00', '2020-12-16', 30),
(114, '10:00', '11:00', '2020-12-16', 30),
(115, '11:00', '12:00', '2020-12-16', 30),
(116, '12:00', '13:00', '2020-12-16', 30),
(117, '13:00', '14:00', '2020-12-16', 30),
(118, '14:00', '15:00', '2020-12-16', 30),
(119, '15:00', '16:00', '2020-12-16', 30),
(120, '16:00', '17:00', '2020-12-16', 30),
(121, '17:00', '18:00', '2020-12-16', 30),
(122, '18:00', '19:00', '2020-12-16', 30),
(123, '19:00', '20:00', '2020-12-16', 30),
(124, '08:00', '09:00', '2020-12-17', 30),
(125, '09:00', '10:00', '2020-12-17', 30),
(126, '10:00', '11:00', '2020-12-17', 30),
(127, '11:00', '12:00', '2020-12-17', 30),
(128, '12:00', '13:00', '2020-12-17', 30),
(129, '13:00', '14:00', '2020-12-17', 30),
(130, '14:00', '15:00', '2020-12-17', 30),
(131, '15:00', '16:00', '2020-12-17', 30),
(132, '16:00', '17:00', '2020-12-17', 30),
(133, '17:00', '18:00', '2020-12-17', 30),
(134, '18:00', '19:00', '2020-12-17', 30),
(135, '19:00', '20:00', '2020-12-17', 30),
(136, '08:00', '09:00', '2020-12-18', 30),
(137, '09:00', '10:00', '2020-12-18', 30),
(138, '10:00', '11:00', '2020-12-18', 30),
(139, '11:00', '12:00', '2020-12-18', 30),
(140, '12:00', '13:00', '2020-12-18', 30),
(141, '13:00', '14:00', '2020-12-18', 30),
(142, '14:00', '15:00', '2020-12-18', 30),
(143, '15:00', '16:00', '2020-12-18', 30),
(144, '16:00', '17:00', '2020-12-18', 30),
(145, '17:00', '18:00', '2020-12-18', 30),
(146, '18:00', '19:00', '2020-12-18', 30),
(147, '19:00', '20:00', '2020-12-18', 30),
(148, '09:00', '10:00', '2020-12-19', 30),
(149, '10:00', '11:00', '2020-12-19', 30),
(150, '11:00', '12:00', '2020-12-19', 30),
(151, '12:00', '13:00', '2020-12-19', 30),
(152, '13:00', '14:00', '2020-12-19', 30),
(153, '14:00', '15:00', '2020-12-19', 30),
(154, '15:00', '16:00', '2020-12-19', 30),
(155, '16:00', '17:00', '2020-12-19', 30),
(156, '17:00', '18:00', '2020-12-19', 30),
(157, '10:00', '11:00', '2020-12-20', 30),
(158, '11:00', '12:00', '2020-12-20', 30),
(159, '12:00', '13:00', '2020-12-20', 30),
(160, '13:00', '14:00', '2020-12-20', 30),
(161, '08:00', '09:00', '2020-12-21', 30),
(162, '09:00', '10:00', '2020-12-21', 30),
(163, '10:00', '11:00', '2020-12-21', 30),
(164, '11:00', '12:00', '2020-12-21', 30),
(165, '12:00', '13:00', '2020-12-21', 30),
(166, '13:00', '14:00', '2020-12-21', 30),
(167, '14:00', '15:00', '2020-12-21', 30),
(168, '15:00', '16:00', '2020-12-21', 30),
(169, '16:00', '17:00', '2020-12-21', 30),
(170, '17:00', '18:00', '2020-12-21', 30),
(171, '18:00', '19:00', '2020-12-21', 30),
(172, '19:00', '20:00', '2020-12-21', 30),
(173, '08:00', '09:00', '2020-12-22', 30),
(174, '09:00', '10:00', '2020-12-22', 30),
(175, '10:00', '11:00', '2020-12-22', 30),
(176, '11:00', '12:00', '2020-12-22', 30),
(177, '12:00', '13:00', '2020-12-22', 30),
(178, '13:00', '14:00', '2020-12-22', 30),
(179, '14:00', '15:00', '2020-12-22', 30),
(180, '15:00', '16:00', '2020-12-22', 30),
(181, '16:00', '17:00', '2020-12-22', 30),
(182, '17:00', '18:00', '2020-12-22', 30),
(183, '18:00', '19:00', '2020-12-22', 30),
(184, '19:00', '20:00', '2020-12-22', 30),
(185, '08:00', '09:00', '2020-12-23', 30),
(186, '09:00', '10:00', '2020-12-23', 30),
(187, '10:00', '11:00', '2020-12-23', 30),
(188, '11:00', '12:00', '2020-12-23', 30),
(189, '12:00', '13:00', '2020-12-23', 30),
(190, '13:00', '14:00', '2020-12-23', 30),
(191, '14:00', '15:00', '2020-12-23', 30),
(192, '15:00', '16:00', '2020-12-23', 30),
(193, '16:00', '17:00', '2020-12-23', 30),
(194, '17:00', '18:00', '2020-12-23', 30),
(195, '18:00', '19:00', '2020-12-23', 30),
(196, '19:00', '20:00', '2020-12-23', 30),
(197, '08:00', '09:00', '2020-12-24', 30),
(198, '09:00', '10:00', '2020-12-24', 30),
(199, '10:00', '11:00', '2020-12-24', 30),
(200, '11:00', '12:00', '2020-12-24', 30),
(201, '12:00', '13:00', '2020-12-24', 30),
(202, '13:00', '14:00', '2020-12-24', 30),
(203, '14:00', '15:00', '2020-12-24', 30),
(204, '15:00', '16:00', '2020-12-24', 30),
(205, '16:00', '17:00', '2020-12-24', 30),
(206, '17:00', '18:00', '2020-12-24', 30),
(207, '18:00', '19:00', '2020-12-24', 30),
(208, '19:00', '20:00', '2020-12-24', 30),
(209, '08:00', '09:00', '2020-12-25', 30),
(210, '09:00', '10:00', '2020-12-25', 30),
(211, '10:00', '11:00', '2020-12-25', 30),
(212, '11:00', '12:00', '2020-12-25', 30),
(213, '12:00', '13:00', '2020-12-25', 30),
(214, '13:00', '14:00', '2020-12-25', 30),
(215, '14:00', '15:00', '2020-12-25', 30),
(216, '15:00', '16:00', '2020-12-25', 30),
(217, '16:00', '17:00', '2020-12-25', 30),
(218, '17:00', '18:00', '2020-12-25', 30),
(219, '18:00', '19:00', '2020-12-25', 30),
(220, '19:00', '20:00', '2020-12-25', 30),
(221, '09:00', '10:00', '2020-12-26', 30),
(222, '10:00', '11:00', '2020-12-26', 30),
(223, '11:00', '12:00', '2020-12-26', 30),
(224, '12:00', '13:00', '2020-12-26', 30),
(225, '13:00', '14:00', '2020-12-26', 30),
(226, '14:00', '15:00', '2020-12-26', 30),
(227, '15:00', '16:00', '2020-12-26', 30),
(228, '16:00', '17:00', '2020-12-26', 30),
(229, '17:00', '18:00', '2020-12-26', 30),
(230, '10:00', '11:00', '2020-12-27', 30),
(231, '11:00', '12:00', '2020-12-27', 30),
(232, '12:00', '13:00', '2020-12-27', 30),
(233, '13:00', '14:00', '2020-12-27', 30),
(234, '08:00', '09:00', '2020-12-28', 30),
(235, '09:00', '10:00', '2020-12-28', 30),
(236, '10:00', '11:00', '2020-12-28', 30),
(237, '11:00', '12:00', '2020-12-28', 30),
(238, '12:00', '13:00', '2020-12-28', 30),
(239, '13:00', '14:00', '2020-12-28', 30),
(240, '14:00', '15:00', '2020-12-28', 30),
(241, '15:00', '16:00', '2020-12-28', 30),
(242, '16:00', '17:00', '2020-12-28', 30),
(243, '17:00', '18:00', '2020-12-28', 30),
(244, '18:00', '19:00', '2020-12-28', 30),
(245, '19:00', '20:00', '2020-12-28', 30),
(246, '08:00', '09:00', '2020-12-29', 30),
(247, '09:00', '10:00', '2020-12-29', 30),
(248, '10:00', '11:00', '2020-12-29', 30),
(249, '11:00', '12:00', '2020-12-29', 30),
(250, '12:00', '13:00', '2020-12-29', 30),
(251, '13:00', '14:00', '2020-12-29', 30),
(252, '14:00', '15:00', '2020-12-29', 30),
(253, '15:00', '16:00', '2020-12-29', 30),
(254, '16:00', '17:00', '2020-12-29', 30),
(255, '17:00', '18:00', '2020-12-29', 30),
(256, '18:00', '19:00', '2020-12-29', 30),
(257, '19:00', '20:00', '2020-12-29', 30),
(258, '08:00', '09:00', '2020-12-30', 30),
(259, '09:00', '10:00', '2020-12-30', 30),
(260, '10:00', '11:00', '2020-12-30', 30),
(261, '11:00', '12:00', '2020-12-30', 29),
(262, '12:00', '13:00', '2020-12-30', 30),
(263, '13:00', '14:00', '2020-12-30', 30),
(264, '14:00', '15:00', '2020-12-30', 30),
(265, '15:00', '16:00', '2020-12-30', 30),
(266, '16:00', '17:00', '2020-12-30', 30),
(267, '17:00', '18:00', '2020-12-30', 30),
(268, '18:00', '19:00', '2020-12-30', 30),
(269, '19:00', '20:00', '2020-12-30', 30),
(270, '08:00', '09:00', '2020-12-31', 30),
(271, '09:00', '10:00', '2020-12-31', 30),
(272, '10:00', '11:00', '2020-12-31', 30),
(273, '11:00', '12:00', '2020-12-31', 30),
(274, '12:00', '13:00', '2020-12-31', 30),
(275, '13:00', '14:00', '2020-12-31', 30),
(276, '14:00', '15:00', '2020-12-31', 30),
(277, '15:00', '16:00', '2020-12-31', 30),
(278, '16:00', '17:00', '2020-12-31', 30),
(279, '17:00', '18:00', '2020-12-31', 30),
(280, '18:00', '19:00', '2020-12-31', 30),
(281, '19:00', '20:00', '2020-12-31', 30),
(282, '08:00', '09:00', '2021-01-01', 30),
(283, '09:00', '10:00', '2021-01-01', 30),
(284, '10:00', '11:00', '2021-01-01', 30),
(285, '11:00', '12:00', '2021-01-01', 30),
(286, '12:00', '13:00', '2021-01-01', 30),
(287, '13:00', '14:00', '2021-01-01', 30),
(288, '14:00', '15:00', '2021-01-01', 30),
(289, '15:00', '16:00', '2021-01-01', 30),
(290, '16:00', '17:00', '2021-01-01', 30),
(291, '17:00', '18:00', '2021-01-01', 30),
(292, '18:00', '19:00', '2021-01-01', 30),
(293, '19:00', '20:00', '2021-01-01', 29),
(294, '09:00', '10:00', '2021-01-02', 30),
(295, '10:00', '11:00', '2021-01-02', 30),
(296, '11:00', '12:00', '2021-01-02', 30),
(297, '12:00', '13:00', '2021-01-02', 30),
(298, '13:00', '14:00', '2021-01-02', 30),
(299, '14:00', '15:00', '2021-01-02', 30),
(300, '15:00', '16:00', '2021-01-02', 30),
(301, '16:00', '17:00', '2021-01-02', 30),
(302, '17:00', '18:00', '2021-01-02', 30),
(303, '10:00', '11:00', '2021-01-03', 30),
(304, '11:00', '12:00', '2021-01-03', 30),
(305, '12:00', '13:00', '2021-01-03', 30),
(306, '13:00', '14:00', '2021-01-03', 30);

-- --------------------------------------------------------

--
-- Table structure for table `sporto_sale`
--

CREATE TABLE `sporto_sale` (
  `id` int(11) NOT NULL,
  `adresas` varchar(255) NOT NULL,
  `darbo_laikas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sporto_sale`
--

INSERT INTO `sporto_sale` (`id`, `adresas`, `darbo_laikas`) VALUES
(1, 'Linkuvos g. 16', '08:00-20:00;08:00-20:00;08:00-20:00;08:00-20:00;08:00-20:00;10:00-18:00;10:00-14:00;');

-- --------------------------------------------------------

--
-- Table structure for table `trenerio_komentarai`
--

CREATE TABLE `trenerio_komentarai` (
  `fk_komentuotojo_id` varchar(255) NOT NULL,
  `fk_trenerio_id` varchar(255) NOT NULL,
  `komentaras` varchar(255) NOT NULL,
  `data` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trenerio_komentarai`
--

INSERT INTO `trenerio_komentarai` (`fk_komentuotojo_id`, `fk_trenerio_id`, `komentaras`, `data`) VALUES
('0a62a63dbb923f4528d73ca69069b61a2b06342f', '658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 'Per brangi kaina', '2020-12-05 00:57:42'),
('2288af2b00d856e75ae3bfbadaaa11ed323d4f19', '2319454c0bac085ee80771c864dde0dfde565db8', 'THE BEST', '2020-12-05 00:18:41'),
('2288af2b00d856e75ae3bfbadaaa11ed323d4f19', '658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 'Gerai nusimano mityboje', '2020-12-05 00:16:23'),
('2288af2b00d856e75ae3bfbadaaa11ed323d4f19', '9f0002fe074eb85bdc91a1c3a419095f97d9ddd4', 'Netflix', '2020-12-05 00:09:25'),
('2319454c0bac085ee80771c864dde0dfde565db8', '658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 'Bloga trenerė', '2020-12-04 14:01:32'),
('2319454c0bac085ee80771c864dde0dfde565db8', '9f0002fe074eb85bdc91a1c3a419095f97d9ddd4', 'Pilnas optimizmo', '2020-12-04 14:01:32'),
('4f7272fe71f4c24028e2ca32d5613ec14e2df3e5', '658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 'Visada motyvuoja ir palaiko :)', '2020-12-05 18:59:43'),
('79d10e0cad53f7effe472236e2ae9a05881974fe', '658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 'Gera trenerė', '2020-12-04 12:55:09'),
('79d10e0cad53f7effe472236e2ae9a05881974fe', '9f0002fe074eb85bdc91a1c3a419095f97d9ddd4', 'Šiaip sau toks bet taip tai normliai', '2020-12-05 00:06:26'),
('b08296dbcb76c6ce90e806e80c5a5063ab822301', '2319454c0bac085ee80771c864dde0dfde565db8', 'Patiko bendravimo forma', '2020-12-04 17:37:13'),
('d86478c67661eee2390120b90f94821d391c771e', '2319454c0bac085ee80771c864dde0dfde565db8', 'Ačiū už gerą treniruotę!', '2020-12-05 18:50:33');

-- --------------------------------------------------------

--
-- Table structure for table `trenerio_vertinimai`
--

CREATE TABLE `trenerio_vertinimai` (
  `fk_vertintojo_id` varchar(255) NOT NULL,
  `fk_trenerio_id` varchar(255) NOT NULL,
  `ivertinimas` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trenerio_vertinimai`
--

INSERT INTO `trenerio_vertinimai` (`fk_vertintojo_id`, `fk_trenerio_id`, `ivertinimas`) VALUES
('0a62a63dbb923f4528d73ca69069b61a2b06342f', '2319454c0bac085ee80771c864dde0dfde565db8', 5),
('0a62a63dbb923f4528d73ca69069b61a2b06342f', '658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 5),
('2288af2b00d856e75ae3bfbadaaa11ed323d4f19', '19e0753f8488c1403558c63767cb59f4bdf7a73a', 3),
('2288af2b00d856e75ae3bfbadaaa11ed323d4f19', '2319454c0bac085ee80771c864dde0dfde565db8', 5),
('2288af2b00d856e75ae3bfbadaaa11ed323d4f19', '658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 5),
('2288af2b00d856e75ae3bfbadaaa11ed323d4f19', '9f0002fe074eb85bdc91a1c3a419095f97d9ddd4', 5),
('4f7272fe71f4c24028e2ca32d5613ec14e2df3e5', '19e0753f8488c1403558c63767cb59f4bdf7a73a', 4),
('4f7272fe71f4c24028e2ca32d5613ec14e2df3e5', '2319454c0bac085ee80771c864dde0dfde565db8', 5),
('79d10e0cad53f7effe472236e2ae9a05881974fe', '658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 5),
('915afaaa026be388898704c24f5ae90a72618b7a', '2319454c0bac085ee80771c864dde0dfde565db8', 3),
('915afaaa026be388898704c24f5ae90a72618b7a', '658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 1),
('915afaaa026be388898704c24f5ae90a72618b7a', '9f0002fe074eb85bdc91a1c3a419095f97d9ddd4', 1),
('b08296dbcb76c6ce90e806e80c5a5063ab822301', '2319454c0bac085ee80771c864dde0dfde565db8', 3),
('d86478c67661eee2390120b90f94821d391c771e', '2319454c0bac085ee80771c864dde0dfde565db8', 4);

-- --------------------------------------------------------

--
-- Table structure for table `treneris`
--

CREATE TABLE `treneris` (
  `fk_trenerio_id` varchar(255) NOT NULL,
  `kaina` double DEFAULT -1,
  `aprasymas` text DEFAULT NULL,
  `moto` text DEFAULT NULL,
  `vertinimas` double DEFAULT -1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `treneris`
--

INSERT INTO `treneris` (`fk_trenerio_id`, `kaina`, `aprasymas`, `moto`, `vertinimas`) VALUES
('19e0753f8488c1403558c63767cb59f4bdf7a73a', 9.69, 'Sportininkė nuo 2016 metų', 'Nėra nieko, kas tave stabdytų, išskyrus tave patį', 3.5),
('2319454c0bac085ee80771c864dde0dfde565db8', 2.5, 'Pats geriausias treneris ever', 'Nemažink savo tikslų, didink pastangas', 4.17),
('658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 10.6, 'Aktyvi trenerė', 'Aš trokštu pergalės todėl priimu iššūkius', 4),
('9f0002fe074eb85bdc91a1c3a419095f97d9ddd4', 64.78, 'Pa\nsau\nlio\nčem\npi\no\nnas!', 'Juk taip smagu daryti tai, kas neįmanoma...', 3),
('aaaaaaaaaaa', 55, 'yes', 'no', 2);

-- --------------------------------------------------------

--
-- Table structure for table `treniruociu_programa`
--

CREATE TABLE `treniruociu_programa` (
  `programos_id` int(11) NOT NULL,
  `pavadinimas` varchar(255) NOT NULL,
  `trukme` varchar(30) NOT NULL,
  `aprasymas` text NOT NULL,
  `kaina` double NOT NULL,
  `fk_trenerio_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `treniruociu_programa`
--

INSERT INTO `treniruociu_programa` (`programos_id`, `pavadinimas`, `trukme`, `aprasymas`, `kaina`, `fk_trenerio_id`) VALUES
(1, 'Treniruočių programa raumenų masei VI', 'Savaite', 'Treniruočių programa norint išdirbti raumens masę. Pirmadienis: Platformos spaudimas gulint ant nugaros 4×10 Kojų teisimas 4×12 Kojų lenkimas 4×12 Pritūpimai su štangą (Štanga laikoma priekyje) 4×15 Antradienis: Hantelių stūmimas 4×6 Plėšimas kampu 4×8 Puloveris 4×10 Prancūziškas spaudimas gulint 3×10 Prancūziškas spaudimas sėdint 3×10 Štangos spaudimas siaurai 3×10 Ketvirtadienis: Nusilenkimai nugarai 3×8 Platūs prisitraukimai 3xMAX Štangos trauka 3×8 Bicepsas su štanga 4×8 Plaktukas su hanteliais bicepsui 3×8 Bicepsas ant suolelio 3×8 Penktadienis Štangos spaudimas už kaklo 3×8 Hantelių kėlimas į šalis 3×10 Hantelių kėlimas priešais save 3×8 Blauzda sėdint 3×12 Atsilenkimai 3×15 Šeštadienis: Įtūpstai 3×15 Kojų tiesimas 2×20 Kojų lenkimas 2×20 Platformos spaudimas 3×15', 62.78, '9f0002fe074eb85bdc91a1c3a419095f97d9ddd4'),
(2, 'Naujokams: Treniruočių programa merginoms su savo kūno svoriu I', '20min', 'Prieš pradėdami sportuoti ir atlikinėti pratimus padarykite apšilimą. „Australiški“ prisitraukimai 3 x 7 Pritūpimai 3 x 8 Atsispaudimai ant suolelio tricepsui 3 x 8 Kabėjimas ant skersinio 3 x MAX Šokinėjimas su šokdyne 3 x 1min Nepilni atsilenkimai 3 x 15 Pasistiebimai blauzdai 3 x 15 Įtūpstai kiekvienai kojai 3 x 8 Po treniruotės nepamirškite atlikti tempimo pratimo visiems kūno raumenims, tai paskatins raumenų atsistatymą, progresą ir išvengsite rimtesnių traumų.', 14.99, '9f0002fe074eb85bdc91a1c3a419095f97d9ddd4'),
(3, 'Naujokams: Treniruočių programa merginoms su savo kūno svoriu II', '40min', 'Prieš pradėdami sportuoti ir atlikinėti pratimus padarykite apšilimą. „Australiški“ prisitraukimai 5 x 7 Pritūpimai 5 x 8 Atsispaudimai ant suolelio tricepsui 5 x 8 Kabėjimas ant skersinio 3 x MAX Šokinėjimas su šokdyne 5 x 2min Nepilni atsilenkimai 3 x 20 Pasistiebimai blauzdai 3 x 15 Įtūpstai kiekvienai kojai 3 x 8 Po treniruotės nepamirškite atlikti tempimo pratimo visiems kūno raumenims, tai paskatins raumenų atsistatymą, progresą ir išvengsite rimtesnių traumų.', 20.11, '19e0753f8488c1403558c63767cb59f4bdf7a73a');

-- --------------------------------------------------------

--
-- Table structure for table `vartotojas`
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
-- Dumping data for table `vartotojas`
--

INSERT INTO `vartotojas` (`id`, `vardas`, `pavarde`, `email`, `slaptazodis`, `profilio_foto`, `reg_date`, `modify_date`, `role`) VALUES
('0a62a63dbb923f4528d73ca69069b61a2b06342f', 'Rimas', 'Rimulis', 'rimantu69@gg.ru', 'r1m0l1s', '/images/profile_samples/4.jpg', '2020-11-20 14:28:48', '2020-11-20 20:30:45', 'KLIENTAS'),
('19e0753f8488c1403558c63767cb59f4bdf7a73a', 'Raminta', 'Sadauksaitė', 'raminciukas@gmail.com', 'r0mr0m', 'https://randomuser.me/api/portraits/women/59.jpg', '2020-11-20 20:29:32', '2020-11-20 20:31:29', 'TRENERIS'),
('2288af2b00d856e75ae3bfbadaaa11ed323d4f19', 'Rimvydas', 'Valatka', 'rimekas@r.lt@r.lt', 'rimux', 'https://cdn2.f-cdn.com/files/download/67637030/screenshot.png', '2020-11-19 14:09:18', '2020-12-05 00:24:02', 'KLIENTAS'),
('2319454c0bac085ee80771c864dde0dfde565db8', 'Petras', 'Petrowič', 'petrowizc@gmail.com', 's3cret!', '/images/profile_samples/2.jpg', '2020-11-20 14:30:14', '2020-11-20 14:34:14', 'TRENERIS'),
('4f7272fe71f4c24028e2ca32d5613ec14e2df3e5', 'Kristijonas', 'Karalaitis', 'i.kristijonas@gmail.com', 'aaa', 'https://pbs.twimg.com/profile_images/1088383629900664834/2XptTf_p_400x400.jpg', '2020-12-05 18:52:56', '2020-12-05 18:53:42', 'KLIENTAS'),
('658b91d2c7d2b3d1cdb06f7cec76852875ed02b7', 'Akvilė', 'Vasiliauskaitė', 'akviliozas@g.gg', 'ak47', '/images/profile_samples/1.jpg', '2020-11-20 20:27:56', '2020-11-20 20:31:40', 'TRENERIS'),
('79d10e0cad53f7effe472236e2ae9a05881974fe', 'Jonas', 'Jonaitis', 'juozelyzas@gmail.com', 'job!', '/images/profile_samples/9.jpg', '2020-11-19 12:58:38', '2020-11-20 14:35:12', 'KLIENTAS'),
('7dc6b37542c39af4b4e3e06f51d5aa6c9c58a944', 'Alina', 'Fiodorova', 'alionochka@yandex.ru', 'al1on0va', 'DEFAULT', '2020-11-20 14:29:35', '2020-11-20 23:12:13', 'KLIENTAS'),
('915afaaa026be388898704c24f5ae90a72618b7a', 'gedas', 'kekstas', 'kekstasgedas@gmail.com', 'pass123', 'https://scontent.fkun1-1.fna.fbcdn.net/v/t1.0-9/39944380_1985209388210390_4630112373020033024_o.jpg?_nc_cat=110&_nc_map=test-rt&ccb=2&_nc_sid=09cbfe&_nc_ohc=PcNXkMD-wlkAX9LnQTm&_nc_ht=scontent.fkun1-1.fna&oh=37f9dfd7cfec7c847cf62f5b356ef1d4&oe=5FDEEF5A', '2020-11-20 12:08:39', '2020-11-20 12:10:37', 'KLIENTAS'),
('9f0002fe074eb85bdc91a1c3a419095f97d9ddd4', 'Dovydas', 'Kavaliauskas', 'dovyzas@gmail.com', 'd0v33', 'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70', '2020-11-20 20:28:23', '2020-11-20 20:31:14', 'TRENERIS'),
('aaaaaaaaaaa', 'vardas', 'pavardas', 'borbonisimo@gmail.com', 'pass', 'DEFAULT', '2020-12-07 01:49:54', '2020-12-07 01:50:03', 'TRENERIS'),
('b08296dbcb76c6ce90e806e80c5a5063ab822301', 'testas', 'testauskas', 'test@gmail.com', 'testas123', 'DEFAULT', '2020-11-19 17:05:59', '2020-11-19 17:05:59', 'KLIENTAS'),
('d86478c67661eee2390120b90f94821d391c771e', 'Sausainyzas', 'Sausainiusas', 'susazas@gmail.com', '4asdg69asd4g', '/images/profile_samples/4.jpg', '2020-11-20 14:28:19', '2020-11-21 19:17:47', 'KLIENTAS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `klientai`
--
ALTER TABLE `klientai`
  ADD PRIMARY KEY (`klientai_id`),
  ADD KEY `fk_vartotojas` (`vartotojas_id`),
  ADD KEY `treneris_id` (`treneris_id`);

--
-- Indexes for table `kliento_rezervacijos`
--
ALTER TABLE `kliento_rezervacijos`
  ADD PRIMARY KEY (`fk_rezervacijos_id`,`fk_vartotojo_id`);

--
-- Indexes for table `klientu_kalendorius`
--
ALTER TABLE `klientu_kalendorius`
  ADD PRIMARY KEY (`kalendoriaus_id`),
  ADD KEY `treneris` (`treneris`,`klientas`,`programa`),
  ADD KEY `fk_klientas` (`klientas`),
  ADD KEY `fk_programa` (`programa`);

--
-- Indexes for table `naujiena`
--
ALTER TABLE `naujiena`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nuolaida`
--
ALTER TABLE `nuolaida`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rezervaciju_laikai`
--
ALTER TABLE `rezervaciju_laikai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sporto_sale`
--
ALTER TABLE `sporto_sale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trenerio_komentarai`
--
ALTER TABLE `trenerio_komentarai`
  ADD PRIMARY KEY (`fk_komentuotojo_id`,`fk_trenerio_id`);

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
-- Indexes for table `treniruociu_programa`
--
ALTER TABLE `treniruociu_programa`
  ADD PRIMARY KEY (`programos_id`),
  ADD KEY `fk_trenerio_id` (`fk_trenerio_id`);

--
-- Indexes for table `vartotojas`
--
ALTER TABLE `vartotojas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `klientai`
--
ALTER TABLE `klientai`
  MODIFY `klientai_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `klientu_kalendorius`
--
ALTER TABLE `klientu_kalendorius`
  MODIFY `kalendoriaus_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rezervaciju_laikai`
--
ALTER TABLE `rezervaciju_laikai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=307;

--
-- AUTO_INCREMENT for table `sporto_sale`
--
ALTER TABLE `sporto_sale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `treniruociu_programa`
--
ALTER TABLE `treniruociu_programa`
  MODIFY `programos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `klientai`
--
ALTER TABLE `klientai`
  ADD CONSTRAINT `fk_vartotojas` FOREIGN KEY (`vartotojas_id`) REFERENCES `vartotojas` (`id`),
  ADD CONSTRAINT `treneris_fk` FOREIGN KEY (`treneris_id`) REFERENCES `treneris` (`fk_trenerio_id`);

--
-- Constraints for table `klientu_kalendorius`
--
ALTER TABLE `klientu_kalendorius`
  ADD CONSTRAINT `fk_klientas` FOREIGN KEY (`klientas`) REFERENCES `vartotojas` (`id`),
  ADD CONSTRAINT `fk_programa` FOREIGN KEY (`programa`) REFERENCES `treniruociu_programa` (`programos_id`),
  ADD CONSTRAINT `fk_treneris` FOREIGN KEY (`treneris`) REFERENCES `treneris` (`fk_trenerio_id`);

--
-- Constraints for table `treniruociu_programa`
--
ALTER TABLE `treniruociu_programa`
  ADD CONSTRAINT `fk_trenerio_id` FOREIGN KEY (`fk_trenerio_id`) REFERENCES `treneris` (`fk_trenerio_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
