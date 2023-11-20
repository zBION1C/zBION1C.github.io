// List iteration 
foreach (int elemento in lista)
{
    // Operation with list values
}

// Add to a list
public void Add (T item);

// Remove from a list
public bool Remove (T item);

// Set
public void Add (T item);
public void Insert (int index, T item);

// Get
foreach (int elemento in lista)
{
    // Work with elemento
}

// Find values in list
public T? Find (Predicate<T> match);
//Find indexes in list
public int FindIndex (int startIndex, int count, Predicate<T> match);