import {useEffect, useState} from "react";

import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {ICar} from "../../interfaces/carInterface";
import {carsService} from "../../services/cars.service";


const CarContainer = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [trigger, setTrigger] = useState<boolean>(null);
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)

    const changeTrigger = () => {
        setTrigger(prevState => !prevState)
    }

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    return (
        <div>
            <CarForm changeTrigger={changeTrigger} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger}/>
        </div>
    );
};

export {CarContainer};