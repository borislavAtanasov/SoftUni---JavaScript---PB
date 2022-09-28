// ⦁	Изготвяне на проекти
// Напишете програма, която изчислява колко часа ще са необходими на един архитект, за да изготви проектите на няколко строителни обекта. Изготвянето на един проект отнема три часа.
// Вход
// От конзолата се четат 2 реда:
// ⦁	Името на архитекта - текст
// ⦁	Брой на проектите, които трябва да изготви - цяло число в интервала [0 … 100]
// Изход
// На конзолата се отпечатва:
// ⦁	"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."



function ProjectCreation(input)
{
    let name = input.shift();
    let projects = input.shift();
    let timePerProject = 3;
    let timeForAllProjects = projects * timePerProject;
    console.log(`The architect ${name} will need ${timeForAllProjects} hours to complete ${projects} project/s.`);
}
ProjectCreation(["Georgi", "4"]);
