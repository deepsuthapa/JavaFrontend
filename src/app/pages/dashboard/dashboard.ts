import { Component, Input } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  @Input() searchText: string = '';
  student = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'assets/student.png',
    progress: 76
  };

  stats = {
    totalCourses: 12,
    completed: 6,
    inProgress: 4,
    certificates: 8
  };

  courses = [
    {
      title: 'Angular Complete Guide',
      instructor: 'Robert',
      progress: 82,
      status: 'Active'
    },
    {
      title: 'Java Spring Boot',
      instructor: 'David',
      progress: 45,
      status: 'Active'
    },
    {
      title: 'Python AI',
      instructor: 'Emma',
      progress: 100,
      status: 'Completed'
    }
  ];

  assignments = [
    {
      title: 'Angular Project',
      course: 'Angular',
      dueDate: 'Tomorrow'
    },
    {
      title: 'Database Design',
      course: 'SQL',
      dueDate: '3 Days'
    }
  ];

  activities = [
    {
      title: 'Quiz Completed',
      description: 'Angular Routing Quiz',
      time: '2 hours ago'
    },
    {
      title: 'Certificate Earned',
      description: 'Java Fundamentals',
      time: 'Yesterday'
    }
  ];

  schedule = [
    {
      time: '09:00 AM',
      subject: 'Angular Live Class',
      teacher: 'Mr. Smith'
    },
    {
      time: '01:00 PM',
      subject: 'Python Lab',
      teacher: 'Mrs. Emma'
    }
  ];
}
