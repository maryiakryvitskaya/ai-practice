# User Management Angular App

This project is a responsive Angular application for displaying and managing user data from an external API. It features a modern UI, table layout, modal details, and client-side user management.

## Features
- Fetches user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- Responsive, modern table layout with sorting and actions
- Modal dialog for detailed user info, including map links
- Client-side user deletion
- Clean, maintainable folder structure using Angular best practices
- SCSS variables and modular styles
- Unit and integration tests for services and components

## Folder Structure
```
src/
  app/
    core/
      user/
        user.service.ts      # User data service
        user.model.ts        # User interfaces
    features/
      user-table/
        user-table.component.ts
        user-table.component.html
        user-table.component.scss
      user-detail-modal/
        user-detail-modal.component.ts
        user-detail-modal.component.html
        user-detail-modal.component.scss
    app.component.ts
    app.component.html
    app.component.scss
    app.config.ts
    app.routes.ts
  styles/
    _variables.scss         # SCSS variables for colors, fonts, etc.
    styles.scss             # Global styles
```

## API
- Data Source: [JSONPlaceholder Users](https://jsonplaceholder.typicode.com/users)
- User model includes: id, name, username, email, address, phone, website, company

## Setup & Usage
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   ng serve
   ```
   Open [http://localhost:4200](http://localhost:4200) in your browser.

## Testing
- **Unit & Integration Tests:**
  ```bash
  ng test
  ```
- Tests cover services, table, and modal components.

## SCSS & Styling
- Uses Open Sans font (Google Fonts)
- All colors, spacing, and breakpoints are managed in `src/styles/_variables.scss`
- Responsive design with media queries and SCSS best practices

## Best Practices Used
- Standalone Angular components
- Dependency injection with `inject()`
- Observable data streams with the `async` pipe
- `trackBy` for efficient list rendering
- Modular, maintainable folder structure (core, features, styles)
- Centralized SCSS variables
- Unit and integration tests

## Extending the App
- Add new features in the `features/` directory
- Add new services or models in `core/`
- Add shared utilities or components in a `shared/` directory

---

For more details, see the Angular CLI documentation: [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
