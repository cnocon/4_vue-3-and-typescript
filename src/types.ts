// Defining a types.ts file in the src directory of your project will centralize where types are defined in order to also allow other files to import types as needed.

// Now, we'll go ahead and define our EventItem interface (using interface since its an object) that's used in the EventDetails view.
export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}