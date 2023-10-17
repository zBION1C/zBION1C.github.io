// Dictionary iteration on key, value pair
foreach (KeyValuePair<string, int> coppia in dizionario)
{
    string chiave = coppia.Key;
    int valore = coppia.Value;
    // Operation with key, value pair
}

// Add
public void Add (TKey key, TValue value);

// Remove
public bool Remove (TKey key);

// Get
dictionary[key];

// Set
dictionary[key] = value;

// Find
public bool ContainsKey (TKey key);
public bool ContainsValue (TValue value);