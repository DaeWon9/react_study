let departmentData = [
    {
        departmentId: '1',
        departmentName: 'π’ κ³΅μ§λ°©',
        departmentGoal: '',
        departmentDeadLine: ''
    },
    {
        departmentId: '2',
        departmentName: 'μμ΄λμ΄λ°©',
        departmentGoal: 'μμ΄λμ΄ μ νκΈ°',
        departmentDeadLine: '2022-10-10'
    },
    {
        departmentId: '3',
        departmentName: 'μ½λ©λ°©',
        departmentGoal: 'νλ‘μ νΈ μμ±',
        departmentDeadLine: '2022-10-29'
    }
];

export function getDepartmentData() {
    return departmentData;
}

export function setDepartmentData(inputDepartmentData) {
    departmentData = inputDepartmentData;
}

export function getDepartmentGoal(departmentId) {
    for (let index = 0; index < departmentData.length; index++){
        if (departmentData[index].departmentId === departmentId){
            return departmentData[index].departmentGoal;
        }
    }
    return "";
}

export function getDepartmentDeadLine(departmentId) {
    for (let index = 0; index < departmentData.length; index++){
        if (departmentData[index].departmentId === departmentId){
            return departmentData[index].departmentDeadLine;
        }
    }
    return "";
}