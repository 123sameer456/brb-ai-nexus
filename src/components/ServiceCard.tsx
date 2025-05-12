
import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  technologies?: string[];
}

const ServiceCard = ({ title, description, icon, technologies = [] }: ServiceCardProps) => {
  return (
    <Card className="card-hover border border-border/40 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="mb-4 p-3 w-16 h-16 rounded-xl flex items-center justify-center gradient-bg">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base min-h-[80px]">{description}</CardDescription>
        {technologies.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link to="/contact" className="w-full">
          <Button variant="ghost" className="w-full justify-between hover:bg-accent/10 hover:text-accent">
            Learn More
            <ArrowRight size={16} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
