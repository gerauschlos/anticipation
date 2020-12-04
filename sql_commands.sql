CREATE TABLE `guilds`(
    `guild_id` BIGINT PRIMARY KEY,
    `player_role` BIGINT NOT NULL,
    `dead_role` BIGINT NOT NULL,
    `blackmailer_role` BIGINT,
    `mayor_role` BIGINT,
    `started_game` BOOLEAN DEFAULT FALSE
);

CREATE TABLE `admin_roles`(
    `role_id` BIGINT NOT NULL,
    `guild_id` BIGINT NOT NULL,
    CONSTRAINT `pk_admin_role` PRIMARY KEY (`role_id`, `guild_id`),
    FOREIGN KEY (`guild_id`) REFERENCES guilds(`guild_id`)
);

CREATE TABLE `players`(
    `user_id` BIGINT,
    `guild_id` BIGINT,
    CONSTRAINT `pk_player` PRIMARY KEY (`user_id`, `guild_id`),
    FOREIGN KEY (`guild_id`) REFERENCES guilds(`guild_id`)
);