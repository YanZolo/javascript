function formatDate(stringDate) {
    var date = new Date(stringDate);

    return `${date.getDate()}/ ${date.getMonth() + 1}/ ${date.getDay}`;

}
