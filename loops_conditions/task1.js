// Завдання 1: Визначення рівня успішності студента
const averageGrade = 88;

if (averageGrade < 60) {
	console.log('Незадовільно');
} else if (averageGrade <= 70) {
	console.log(' "Задовільно"');
} else if (averageGrade <= 80) {
	console.log(' "Добре"');
} else if (averageGrade <= 90) {
	console.log('"Дуже добре"');
} else {
	console.log('Відмінно');
}
