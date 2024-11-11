# Resume Builder & Parser

A [Next.js](https://nextjs.org/) application that helps students and professionals create a polished, ATS-friendly resume from scratch or by parsing an existing resume PDF. With a user-friendly interface and customizable options, users can create or enhance resumes that are easy to read by applicant tracking systems (ATS). Built with Next.js, Redux Toolkit, TypeScript, TailwindCSS, and ReactPDF Renderer.

Visit the live application here: [Resume Builder & Parser](https://cv-builder-black.vercel.app)

## Features

### 1. **Resume Builder**
   - **Start from Scratch:** Users can create a new resume by filling out predefined sections like **Introduction**, **Education**, **Experience**, **Projects**, and **Skills**. Users can also add custom sections.
   - **Real-time Preview:** All entered information automatically updates in the resume preview, allowing users to see changes instantly.
   - **Customizable Settings:** Users can personalize their resume with options to:
      - Change theme color
      - Adjust font and font size
      - Set document dimensions
   - **Downloadable PDF:** Once satisfied, users can download their resume as a professionally formatted PDF.

### 2. **Resume Parser**
   - **Upload Existing Resume:** Users can upload a PDF of an existing resume to see how well it would be parsed by an ATS.
   - **Interactive Parsing Results:** An in-app playground lets users experiment with different resume PDFs, showcasing the app's parsing capabilities.
   - **ATS Score:** The parser evaluates how well a resume could be read by standard ATS, with parsed sections identified for user review.

### 3. **Progress Saving with Local Storage**
   - **Resume Draft Saving:** The application saves the user's progress, settings, and resume details in the local storage. This feature ensures that users can continue editing from where they left off.

## Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm or yarn


### Usage
  - Home Page: The homepage introduces the app and provides a “Get Started” button.
  - Resume Parser:
  -  Click "Upload Resume" to add an existing PDF.
  - Preview how well the resume is parsed, observing different parsing results.
  - Resume Builder:
  - Click "Create" to start building a resume from scratch.
  - Fill out each form section with necessary details (introduction, education, experience, etc.).
  -  Customize resume appearance by adjusting settings.
  - Preview and download the final PDF.
### Technologies Used
  * Next.js: Framework for server-rendered React applications.
  * Redux Toolkit: State management for handling resume details and settings.
  * TypeScript: For improved developer experience and type safety.
  * TailwindCSS: Utility-first CSS framework for rapid UI development.
  * ReactPDF Renderer: For generating PDF files from React components.
### Project Motivation
This application aims to streamline the resume-building process for students and job seekers, helping them understand how ATS works and improving their chances of passing ATS scans. By simulating ATS parsing, users can identify key sections and optimize their resumes for ATS compatibility.
