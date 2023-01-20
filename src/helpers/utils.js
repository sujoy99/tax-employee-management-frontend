export const getSalaryObject = (fromYear, toYear, values, salaryTypeList) => {
  console.log("type : ", salaryTypeList);
  let result = [];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let monthIndex = 6;
  values.lineItems = [];
  while (fromYear <= toYear) {
    if (monthIndex === 6 && fromYear === toYear) {
      break;
    }
    let checkForTotal = true;

    let subResult = salaryTypeList.map((obj, idx) => {
      if (checkForTotal) {
        let currTotalObj = {
          year: fromYear,
          month: monthIndex,
          salaryTypeId: null,
          amount: 0,
          isTotal: true,
        };
        values.lineItems.push(currTotalObj);
        checkForTotal = false;
        return currTotalObj;
      }

      let currObj = {
        // year: fromYear,
        month: monthIndex,
        salaryTypeId: obj.value,
        amount: 0,
        isTotal: false,
      };
      values.lineItems.push(currObj);
      return currObj;
    });
    result.push({
      rowHeader: `${fromYear}-${month[monthIndex]}`,
      list: subResult,
    });
    monthIndex++;

    if (monthIndex === 12) {
      monthIndex = 0;
      fromYear = toYear;
    }
  }
  console.log("res", result);
  return result;
};

export const getSalaryObjectTotal = (values, salaryTypeList) => {
  let result = [];
  values.lineItemTotals = [];

  // for total
  let subResult = salaryTypeList.map((obj, idx) => {
    let currObj = {
      rowHeader: "Total",
      salaryTypeId: obj.value,
      amount: 0,
      isTotal: true,
    };
    values.lineItemTotals.push(currObj);
    return currObj;
  });
  // console.log("res", subResult);
  return subResult;
};
