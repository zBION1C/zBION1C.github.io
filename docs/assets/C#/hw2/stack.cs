// Iteration in linked list
foreach (string elemento in linkedList)
{
    // Esegui operazioni con l'elemento
}

// Add
public void AddAfter (System.Collections.Generic.LinkedListNode<T> node, System.Collections.Generic.LinkedListNode<T> newNode);
public void AddBefore (System.Collections.Generic.LinkedListNode<T> node, System.Collections.Generic.LinkedListNode<T> newNode);
public void AddFirst (System.Collections.Generic.LinkedListNode<T> node);
public void AddLast (System.Collections.Generic.LinkedListNode<T> node);

// Remove
public void Remove (System.Collections.Generic.LinkedListNode<T> node);
public void RemoveFirst ();
public void RemoveLast ();

// There is no set method

// Get
public virtual object? Peek ();
public virtual object? Pop ();

// Find
public bool Contains (T value);
public System.Collections.Generic.LinkedListNode<T>? Find (T value);