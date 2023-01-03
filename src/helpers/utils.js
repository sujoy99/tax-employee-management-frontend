export const getSalaryObject = (fromYear, toYear) => {
    let result = [];
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const salaryTypeList = [
        {
            id: 1,
            name: 'Basic'
        },
        {
            id: 2,
            name: 'House Rent'
        },
        {
            id: 3,
            name: 'Medical'
        }
    ];

    let monthIndex = 6;
    while(fromYear <= toYear){
        if(monthIndex === 6 && fromYear === toYear){
            break;
        }
        let subResult = salaryTypeList.map((obj, idx)=>{
            return {
                year: fromYear,
                month: monthIndex,
                salaryTypeId: obj.id,
                amount: 0,
                isTotal: false
            }
        });
        result.push(subResult);
        monthIndex++;

        if(monthIndex === 12){
            monthIndex = 0;
            fromYear = toYear;
        }
    }

    return result;
}