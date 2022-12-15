
interface CarData {
    Brand: string
    Model: string
    Year: string
    Value: string
    Color: string
}

const Cars: CarData[] = [
    {
        Brand: 'Fiat',
        Model: 'Toro',
        Year: '2022',
        Value: '130000',
        Color: 'Branca',
    },
    {
        Brand: 'Honda',
        Model: 'Civic',
        Year: '2022',
        Value: '100000',
        Color: 'Preto',
    },
    {
        Brand: 'Chevrolet',
        Model: 'Onix',
        Year: '2022',
        Value: '100000',
        Color: 'Preto',
    },
    {
        Brand: 'Ford',
        Model: 'Fusion',
        Year: '2022',
        Value: '100000',
        Color: 'Preto',
    },
    {
        Brand: 'Fiat',
        Model: 'FastBack',
        Year: '2022',
        Value: '130000',
        Color: 'Branca',
    },
]

const PropertiesStrings = ['Brand', 'Model', 'Color']

// console.log(SearchCarsByBrand(Cars, 'Fiat'))
// console.log(ViewCarsAvailable(Cars))
// console.log(ShowProperties(Cars, PropertiesStrings))

function SearchCarsByBrand(array: CarData[], brand: string){
    return array.filter((item) => item.Brand === brand)
}

function ViewCarsAvailable(array: CarData[]){
    let ListOfCarsAvailable: string[] = []
    array.forEach((item: CarData) => {
        const verificateListOfCars =  array.every((x: CarData) => ListOfCarsAvailable.includes(x.Brand))
        verificateListOfCars === false && (ListOfCarsAvailable.push(item.Brand))
    })

    return ListOfCarsAvailable
}

function ShowProperties(array: CarData[], arrayStrings: string[]){
    let ListOfCarsProperties: CarData[] = []

    array.forEach((item) => {
        let newObject: CarData = {
            Brand: '',
            Model: '',
            Year: '',
            Color: '',
            Value: '',
        }

        arrayStrings.forEach((string: string) => {
            switch(string){
                case 'Brand':
                const Brand = item[string]
                newObject.Brand = Brand
                break;

                case 'Model':
                const Model = item[string]
                newObject.Model = Model
                break;

                case 'Year':
                const Year = item[string]
                newObject.Year = Year
                break;

                case 'Value':
                const Value = item[string]
                newObject.Value = Value
                break;

                case 'Color':
                const Color = item[string]
                newObject.Color = Color
                break;
            }
        })
        ListOfCarsProperties.push(newObject)
    })
    return ListOfCarsProperties
}