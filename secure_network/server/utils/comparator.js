/*
 * Copyright (c) 2021
 *
 * @author Lorenzo Fratus
 * @author Simone Orlando
 * @author Cristian C. Spagnuolo
 */
export function compareByName(a, b) {
	if (a.name < b.name) {
		return -1
	}
	if (a.name > b.name) {
		return 1
	}
	return 0
}
