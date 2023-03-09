function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [...cars];

  // Tulis code-mu disini
  const filteredCars = result.filter((a) => a.available == true);
  console.table(filteredCars);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return filteredCars;
}
