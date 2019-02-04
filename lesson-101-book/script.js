window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    /**
     * Урок 2. Типы данных
     */
    
    // Сколько секунд в году
    const SECONDS_IN_A_MINUTE = 60;
    const MINUTES_IN_AN_HOUR = 60;
    const SECONDS_IN_AN_HOUR = SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR;
    
    console.log(SECONDS_IN_AN_HOUR);

    const HOURS_IN_A_DAY = 24;
    const SECONDS_IN_A_DAY = SECONDS_IN_AN_HOUR * HOURS_IN_A_DAY;

    console.log(SECONDS_IN_A_DAY);

    const DAYS_IN_A_YEAR = 365;
    const SECONDS_IN_A_YEAR = SECONDS_IN_A_DAY * DAYS_IN_A_YEAR;

    console.log(SECONDS_IN_A_YEAR);

    // Какой возраст в секундах
    let age = 37;
});