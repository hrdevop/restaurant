
import { Pipe, PipeTransform } from '@angular/core';
import { IRestaurant } from './restaurant/interfaces';


@Pipe({
    name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

    /**
     * Pipe filters the list of elements based on the search text provided
     *
     * @param items list of elements to search in
     * @param searchText search string
     * @returns list of elements filtered by search text or []
     */
    transform(items: any[], searchText: string): any[] {

        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();

        const filteredItems = items.filter(it => {
            return Object.values(it).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(searchText)
            );
        });

        return filteredItems;
    }

}
