import "./Filters.css"
import { useFilters } from '../hooks/useFilters'
import { useId } from 'react'

export function Filters() {

    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleMinPriceChange = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        })
        )
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }


    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    value={filters.minPrice}
                    onChange={handleMinPriceChange}
                />
                <span>{filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}