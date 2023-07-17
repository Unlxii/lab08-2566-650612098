export const Footer = (person) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © {person.year} {person.fullname} {person.studentID}
      </p>
    </div>
  );
};
