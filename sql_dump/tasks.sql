-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2023 at 12:49 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_public_id` varchar(255) DEFAULT NULL,
  `priority` enum('low','medium','high') DEFAULT 'low',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `image`, `image_public_id`, `priority`, `created_at`, `updated_at`) VALUES
(6, 'wertwrt', 'Sign matti goois', 'http://res.cloudinary.com/dm4ofrie7/image/upload/v1697751883/tasks/tobhyby7qmafptvcr498.jpg', 'tasks/tobhyby7qmafptvcr498', 'high', '2023-10-19 21:44:26', '2023-10-19 21:44:44'),
(9, 'title from postman 2', 'description from postman 2', 'http://res.cloudinary.com/dm4ofrie7/image/upload/v1697752523/tasks/ereyoy5yaonkkd7a29hp.png', 'tasks/ereyoy5yaonkkd7a29hp', 'high', '2023-10-19 21:55:24', '2023-10-19 21:55:24'),
(10, 'we4tg3ewg', '34gqw45tw34t', 'http://res.cloudinary.com/dm4ofrie7/image/upload/v1697752769/tasks/exo80vz2hye6zynk2p0e.jpg', 'tasks/exo80vz2hye6zynk2p0e', 'high', '2023-10-19 21:59:30', '2023-10-19 21:59:30'),
(11, 'wefwarf', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 'http://res.cloudinary.com/dm4ofrie7/image/upload/v1697752879/tasks/y5fwhkis0vxyudocbk1s.jpg', 'tasks/y5fwhkis0vxyudocbk1s', 'medium', '2023-10-19 22:01:21', '2023-10-19 22:01:21'),
(13, 'ewgrgesrg', 'egsgsgsg', 'http://res.cloudinary.com/dm4ofrie7/image/upload/v1697753450/tasks/gdldllar7ktbglnxo2ua.jpg', 'tasks/gdldllar7ktbglnxo2ua', 'high', '2023-10-19 22:10:51', '2023-10-19 22:10:51'),
(14, 'awefaf', 'awergaergaerg', 'http://res.cloudinary.com/dm4ofrie7/image/upload/v1697754789/tasks/udyew0tqiozhd2dwxosf.jpg', 'tasks/udyew0tqiozhd2dwxosf', 'medium', '2023-10-19 22:33:11', '2023-10-19 22:33:11'),
(15, 'agerg', 'aergaergaeg', 'http://res.cloudinary.com/dm4ofrie7/image/upload/v1697754827/tasks/wgifveviwnshh1ssobru.jpg', 'tasks/wgifveviwnshh1ssobru', 'medium', '2023-10-19 22:33:48', '2023-10-19 22:33:48'),
(16, 'wy45y', 'wgh5ghhrth', 'http://res.cloudinary.com/dm4ofrie7/image/upload/v1697755198/tasks/hnnazstevv9ngslp3pcz.png', 'tasks/hnnazstevv9ngslp3pcz', 'high', '2023-10-19 22:39:59', '2023-10-19 22:39:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
