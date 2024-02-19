import {ICar} from "../interfaces/carInterface";
import {IRes} from "../types/responseType";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const carsService = {
    getAll: (): IRes<ICar[]> => apiService.get(urls.cars.base),
    getById: (id: number): IRes<ICar> => apiService.get(urls.cars.byId(id)),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.cars.base, data),
    updateById: (id: number, data: ICar): IRes<ICar> => apiService.put(urls.cars.byId(id), data),
    deleteById: (id: number): IRes<void> => apiService.delete(urls.cars.byId(id))
}

export {
    carsService
}