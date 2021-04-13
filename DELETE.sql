USE `office`;

DELETE FROM `office`.`programmers`
WHERE `name` = 'Jack';

DELETE FROM `office`.`applications`
WHERE `programmer` = 'John' AND `title` = 'VK App';

