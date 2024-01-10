CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `username` varchar(255),
  `role` varchar(255)
);

CREATE TABLE `users_stats` (
  `id` integer PRIMARY KEY,
  `title` varchar(255),
  `user_id` integer,
  `status` varchar(255),
  `user_questions_done` integer
);

CREATE TABLE `users_survey` (
  `id` integer PRIMARY KEY,
  `user_id` integer,
  `title` varchar(255),
  `max_question` integer
);

ALTER TABLE `users_stats` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `users_survey` ADD FOREIGN KEY (`id`) REFERENCES `users` (`id`);

-- CREATE DATABASE IF NOT EXISTS user_statistics;

-- USE user_statistics;

-- CREATE TABLE IF NOT EXISTS users (
--   user_id INT AUTO_INCREMENT PRIMARY KEY,
--   question_max INT,
--   question_done INT
-- );