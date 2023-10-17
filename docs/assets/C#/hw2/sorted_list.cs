// Sorted list iteration 
foreach (KeyValuePair<int, string> coppia in sortedList)
{
    int chiave = coppia.Key;
    string valore = coppia.Value;
    // Esegui operazioni con la coppia chiave-valore
}

// Add to a list
public virtual void Add (object key, object? value);

// Remove from a list
public virtual void Remove (object key);

// Set There is no set method for sortedlist


// Get
sortedList.getKey(key)
public virtual System.Collections.IList GetValueList ();

// Find 
public virtual bool ContainsKey (object key);
public virtual bool ContainsValue (object? value);