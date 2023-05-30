export class LocalStorageService {
  static instance = null;

  constructor() {
    const searchedList = [];
    const jsonString = JSON.stringify(searchedList);
    localStorage.setItem('searchedDistanceInfos', jsonString);
  }

  static getInstance() {
    if (!LocalStorageService.instance) {
      LocalStorageService.instance = new LocalStorageService();
    }
    return LocalStorageService.instance;
  }

  static destroy() {
    LocalStorageService.instance = null;
  }

  saveSearchInfosInLocalStorage(sourceAddress, destinationAddress, distance) {
    const searchedInfos = {
      sourceAddress: sourceAddress,
      destinationAddress: destinationAddress,
      distance: distance
    };
    const storedSearchedString = localStorage.getItem('searchedDistanceInfos');
    const storedSearchedList = JSON.parse(storedSearchedString) || [];
    const updatedSearchedList = [...storedSearchedList, searchedInfos];
    localStorage.setItem('searchedDistanceInfos', JSON.stringify(updatedSearchedList));
  }
}
