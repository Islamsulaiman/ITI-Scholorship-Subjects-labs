# # Ex1

# class Queue:
#     def __init__(self):
#         self.queue = []

#     def insert(self, value):
#         self.queue.append(value)

#     def pop(self):
#         if len(self.queue) == 0:
#             print("Warning: Queue is empty")
#             return None
#         return self.queue.pop(0)

#     def is_empty(self):
#         return len(self.queue) == 0



# # Ex2

# class QueueEx2:
#     queues = {}

#     def __init__(self, name, size):
#         self.name = name
#         self.size = size
#         self.queue = []
#         self.__class__.queues[name] = self

#     def enqueue(self, item):
#         if len(self.queue) >= self.size:
#             raise IndexError("Queue is full")
#         self.queue.append(item)

#     def dequeue(self):
#         if not self.queue:
#             return None
#         return self.queue.pop(0)

#     @classmethod
#     def save(cls):
#         with open('queues.txt', 'w') as f:
#             for queue in cls.queues.values():
#                 f.write(f"{queue.name},{queue.size},{queue.queue}\n")

#     @classmethod
#     def load(cls):
#         with open('queues.txt', 'r') as f:
#             for line in f.readlines():
#                 name, size, queue = line.strip().split(',')
#                 queue = eval(queue)
#                 cls(name, int(size)).queue = queue


