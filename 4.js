console.log("Задание №4 \n");

        let student = {
            group: 305,
            last_name: "Иванов",
            first_name: "Иван"
        };
        console.log("Список свойств: " + Object.keys(student));
        console.log(`Cтудент ${student.last_name} ${student.first_name} учится в ${student.group} группе`);

        let student1 = {
            group: "201-324",
            last_name: "Константинова",
            first_name: "Ксения"
        };

        console.log("Список свойств: " + Object.keys(student1));
        console.log(`Cтудент ${student1.last_name} ${student1.first_name} учится в ${student1.group} группе`);