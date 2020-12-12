-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 12, 2020 at 02:41 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

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
-- Table structure for table `uzsakymas`
--

CREATE TABLE `uzsakymas` (
  `fk_saskaitos_id` int(11) NOT NULL,
  `fk_vartotojo_id` varchar(255) NOT NULL,
  `kaina` double NOT NULL,
  `fk_prekes_id` int(11) NOT NULL,
  `adresas` varchar(255) NOT NULL,
  `atsiskaitymo_budas` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `uzsakymas`
--

INSERT INTO `uzsakymas` (`fk_saskaitos_id`, `fk_vartotojo_id`, `kaina`, `fk_prekes_id`, `adresas`, `atsiskaitymo_budas`, `id`) VALUES
(70, 'b08296dbcb76c6ce90e806e80c5a5063ab822301', 35.290000915527344, 1, 'Skundikų gatvė', 'Grynais atvykus', 3),
(71, 'b08296dbcb76c6ce90e806e80c5a5063ab822301', 35.290000915527344, 1, 'Skundikų gatvė', 'Grynais atvykus', 4),
(72, 'b08296dbcb76c6ce90e806e80c5a5063ab822301', 35.290000915527344, 1, 'Skundikų gatvė', 'Grynais atvykus', 5),
(73, '977d4e2583cbd39c9c3ead3b0008906a130d1c36', 37.4900016784668, 6, 'Skundikų gatvė', 'Grynais atvykus', 6),
(74, '977d4e2583cbd39c9c3ead3b0008906a130d1c36', 37.4900016784668, 7, 'Skundikų gatvė', 'Grynais atvykus', 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `uzsakymas`
--
ALTER TABLE `uzsakymas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `uzsakymas`
--
ALTER TABLE `uzsakymas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
