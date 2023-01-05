export const getSalaryObject = (fromYear, toYear, values) => {
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
    values.lineItems = [];
    while(fromYear <= toYear){
        if(monthIndex === 6 && fromYear === toYear){
            break;
        }
        let subResult = salaryTypeList.map((obj, idx)=>{
            let currObj = {
                year: fromYear,
                month: monthIndex,
                salaryTypeId: obj.id,
                amount: 0,
                isTotal: false
            };
            values.lineItems.push(currObj);
            return currObj;
        });
        // result.push(subResult);
        result.push({year: fromYear, month: month[monthIndex], list: subResult});
        monthIndex++;

        if(monthIndex === 12){
            monthIndex = 0;
            fromYear = toYear;
        }
    }
    console.log("res", result);
    return result;
}