#include<stdio.h>
#include<stdlib.h>

//queue using linked list

typedef struct node node;

struct node
{
    int data;
    struct node *next;
};

//prototypes
void dequeue();
void enqueue(int val);
void display();
node * createNode(int data);


struct node *front = NULL, *rear = NULL;


int main()
{
    enqueue(60);
    enqueue(70);
    enqueue(80);
    printf("Queue :");
    display();
    dequeue();
    printf("After dequeue :");
    display();
    dequeue();
    printf("After dequeue:");
    display();

    return 0;
}


node * createNode(int data){  //create new node at the heap
    //create new node
    node * newNode = (node *) malloc(sizeof(node));
    newNode->data = data;
    newNode->next = NULL;

    return newNode;
}



void enqueue(int val)
{
    struct node *newNode = createNode(val);

    //if it is the first node
    if(front == NULL && rear == NULL)
        //make both front and rear points to the new node
        front = rear = newNode;
    else
    {
        //add newnode in rear->next
        rear->next = newNode;

        //make the new node as the rear node
        rear = newNode;
    }
}

void dequeue()
{
    //used to free the first node after dequeue
    struct node *temp;

    if(front == NULL)
         printf("Queue is Empty. Unable to perform dequeue\n");
    else
    {
        //take backup
        temp = front;

        //make the front node points to the next node
        //logically removing the front element
        front = front->next;

        //if front == NULL, set rear = NULL
        if(front == NULL)
            rear = NULL;

       //free the first node
       free(temp);
    }

}

void display()
{
    struct node *temp = front;

    while(temp)
    {
        printf("%d->",temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}
